const SlotSkill = require('../Enum/SlotSkill.js');
const DamageType = require('../Enum/DamageType.js');
const SkillType = require('../Enum/SkillType.js');
const DotType = require('../Enum/DotType.js');
const SkillStats = require('../Skill/SkillStats.js');
const BuffStats = require('../Hero/AttributesHero/BuffStats.js');
const DamageData = require('../Data/DamageData.js');
const EventEmitter = require('events').EventEmitter;
const Utility = require('../Common/utility.js');

class Skill extends EventEmitter {
    constructor(data) {
        super();
        if (data != null) this.initData = data;
        if (data != null) this.id = data.id;
        this.currentLifeTurn = 0;
        this.enemy = null;
        this.owner = null;

        this.stats = new SkillStats(data);
        this.heros = [];
        this.buffSkill = new BuffStats();
    }

    skillActive() {
    }

    initSkill() {
        this.currentLifeTurn = this.stats.lifeTurn;
    }

    initSkillOwner(owner) {
        this.owner = owner;
    }

    checkLevelSkill() {
    }

    skillAffectHeros() {
        this.heros.length = 0;
        let cardBattleLib = this.owner.cardBattleLib;
        for (let i = 0; i < this.stats.atkType.length; i++) {
            this.heros = this.heros.concat(Utility.listAttack(cardBattleLib.heros, this.owner.data.teamType, this.stats.atkType[i], this.stats.numberTarget, this.owner));
        }
        for (let i = 0; i < this.heros.length; i++) {
            this.heros[i].receiveSkill(this.clone());
        }
    }

    skillAffectHerosAlly(skill) {
        this.heros.length = 0;
        let cardBattleLib = this.owner.cardBattleLib;
        for (let i = 0; i < this.stats.atkType.length; i++) {
            this.heros = this.heros.concat(Utility.listAttack(cardBattleLib.heros, this.owner.data.enemyType, this.stats.atkType[i], this.stats.numberTarget, this.owner));
        }
        for (let i = 0; i < this.heros.length; i++) {
            this.heros[i].receiveSkill(skill.clone());
        }
    }

    dealDamageHeros() {
        this.heros.length = 0;
        let cardBattleLib = this.owner.cardBattleLib;
        for (let i = 0; i < this.stats.atkType.length; i++) {
            this.heros = this.heros.concat(Utility.listAttack(cardBattleLib.heros, this.owner.data.teamType, this.stats.atkType[i], this.stats.numberTarget, this.owner));
        }
        console.log("=========>dealDamageHeros", this.heros.length);
        for (let i = 0; i < this.heros.length; i++) {
            let item = this.heros[i];
            console.log("=========>item", item.data, item.currentStats);
            this.dealDamage(this.stats.percentAtkToDamage, item);
        }
    }

    healHeros(numberTarget) {
        this.heros.length = 0;
        let cardBattleLib = this.owner.cardBattleLib;
        for (let i = 0; i < this.stats.atkType.length; i++) {
            this.heros = this.heros.concat(Utility.listAttack(cardBattleLib.heros, this.owner.data.enemyType, this.stats.atkType[i], numberTarget, this.owner));
        }
        for (let i = 0; i < this.heros.length; i++) {
            let item = this.heros[i];
            this.recoverHealth(this.stats.percentAtkToBuff, item);
        }
    }

    processSkill() {
        if (this.stats.isInfinity) return;
        if (this.enemy.currentHealth.isOverHealth) {
            this.recoverSkill(); return;
        }
        if (this.currentLifeTurn <= 0) return;
        this.currentLifeTurn--;
        if (this.currentLifeTurn === 0) this.recoverSkill();
    }

    addEffectToEnemy(effect) {
        for (let i = 0; i < this.heros.length; i++) {
            let hero = this.heros[i];
            if (this.canAddEffectToEnemy(hero)) {
                hero.receiveSkill(effect.clone());
            }
        }
    }

    recoverSkill() {
        if (this.enemy != null) {
            this.enemy.caculateStats();
        }
    }

    resetLifeTurn() {
        this.currentLifeTurn = this.stats.lifeTurn;
    }

    transferData(skillA, skillB) {
        skillB.id = skillA.id;
        skillB.skillType = skillA.skillType;
        skillB.skillPriority = skillA.skillPriority;
        skillB.order = skillA.order;
        skillB.owner = skillA.owner;
        skillB.stats = skillA.stats.clone();
    }

    dealDamage(percentAtkToDamage, enemy) {
        let data = new DamageData(this.owner);
        data.type = this.owner.data.DamageType;

        let buffSkill = this.getBuffSkillThisDamage(enemy);
        let thisDamageStats = this.getStatsThisDamages(buffSkill);
        data.thisDamageStats = thisDamageStats;
        let bonusType = 0;
        let bonusSkillDamage = 0;
        if (data.type === DamageType.DAMAGE_TYPE_PHYSIC) {
            bonusType = thisDamageStats.physicBonus / 100;
        } else {
            bonusType = thisDamageStats.magicBonus / 100;
        }
        if (this.skillType === SkillType.SKILL_TYPE_POWER_FULL || this.SkillType === SkillType.SKILL_TYPE_POWER) {
            bonusSkillDamage = thisDamageStats.skillBonus / 100;
        }
        let damage = thisDamageStats.atk * percentAtkToDamage / 100 * (1 + bonusType + bonusSkillDamage);
        if (thisDamageStats.critChance - enemy.currentStats.critResistance > Utility.randomRange(0, 100)) {
            damage *= thisDamageStats.critDamage / 100;
            data.isCrit = true;
            console.log("Attack crit");
        }

        damage *= (1 + buffSkill.damageBonusAll / 100);
        data.damage = damage;
        if (enemy.currentStats.dodgeRate - thisDamageStats.hitRate > Utility.randomRange(0, 100)) {
            data.isDodge = true;
        }
        if (!data.isDodge) {
            let heathRecover = data.damage * thisDamageStats.lifeSteal / 100;
            this.owner.recoverHealth(heathRecover, this.owner, false);
            this.effectWhenHit(this.enemy);
        }

        console.log("==============================enemy.takeDamage(data)", data.damage);
        enemy.takeDamage(data);
    }

    dealDamageNotUseStats(originDame, enemy) {
        let data = new DamageData(this.owner);
        data.type = this.owner.data.damageType;

        let buffSkill = this.getBuffSkillThisDamage(enemy);
        let thisDamageStats = thisDamageStats;
        let bonusType = 0;
        let bonusSkillDamage = 0;
        if (data.type === DamageType.DAMAGE_TYPE_PHYSIC) {
            bonusType = thisDamageStats.physicBonus / 100;
        } else {
            bonusType = thisDamageStats.magicBonus / 100;
        }
        if (this.skillType === SkillType.SKILL_TYPE_POWER || this.skillType === SkillType.SKILL_TYPE_POWER_FULL) {
            bonusSkillDamage = thisDamageStats.skillBonus / 100;
        }

        let damage = originDame * (1 + bonusType + bonusSkillDamage);

        damage *= (1 + buffSkill.damageBonusAll / 100);
        data.damage = damage;
        if (enemy.currentStats.dodgeTate - thisDamageStats.hitRate > Utility.randomRange(0, 100)) {
            data.isDodge = true;
        }
        if (!data.isDodge) {
            let healthRecover = data.damage * thisDamageStats.lifeSteal / 100;
            this.owner.recoverHealth(healthRecover, this.owner, false);
            this.effectWhenHit(this.enemy);
        }
        enemy.takeDamage(data);
    }
    effectWhenHit(enemy) {

    }

    dealDamagePercentHealth(percent, enemy, type = DotType.DOT_TYPE_PERCENT_MAXHEALTH) {
        let data = new DamageData(this.owner);
        data.type = this.owner.data.damageType;

        let buffSkill = this.getBuffSkillThisDamage(enemy);
        let thisDamageStats = this.getStatsThisDamages(buffSkill);
        data.thisDamageStats = thisDamageStats;
        data.isDotDamage = true;
        let bonusType = 0;
        let bonusSkillDamage = 0;
        if (data.type === DamageType.DAMAGE_TYPE_PHYSIC / 100) {
            bonusType = thisDamageStats.physicBonus / 100;
        } else {
            bonusType = thisDamageStats.magicBonus / 100;
        }
        if (this.skillType === SkillType.SKILL_TYPE_POWER || this.skillType === SkillType.SKILL_TYPE_POWER_FULL) {
            bonusSkillDamage = thisDamageStats.skillBonus / 100;
        }
        let damage = 0;
        if (type === DotType.DOT_TYPE_PERCENT_CURHEALTH) {
            damage = enemy.currentHealth.current * percent / 100 * (1 + bonusType + bonusSkillDamage);
        } else {
            damage = enemy.currentHealth.max * percent / 100 * (1 + bonusType + bonusSkillDamage);
        }

        if (thisDamageStats.critChance - enemy.currentStats.critResistance > Utility.randomRange(0, 100)) {
            damage *= thisDamageStats.critDamage / 100;
            data.isCrit = true;
            console.log("Attack crit");
        }
        damage *= (1 + buffSkill.damageBonusAll / 100);
        data.damage = damage;
        if (enemy.currentStats.dodgeRate - thisDamageStats.hitRate > Utility.randomRange(0, 100)) {
            data.isDodge = true;
        }
        if (!data.isDodge) {
            let healthRecover = data.damage * thisDamageStats.lifeSteal / 100;

            this.owner.recoverHealth(healthRecover, this.owner, false);
        }
        enemy.takeDamage(data);
    }

    recoverHealth(percentAtkToHealth, enemy) {
        let health = this.owner.currentStats.atk * percentAtkToHealth / 100 * (1 + this.owner.currentStats.healingBonus / 100);
        enemy.recoverHealth(health, this.owner);
    }

    recoverHealthFlat(amount, enemy) {
        let health = amount * (1 + this.owner.currentStats.healingBonus / 100);
        enemy.recoverHealth(health, this.owner);
    }

    effectSkill(damageData) {
        return damageData;
    }

    actionWhenReciveSkill(skillRecive) {

    }

    buffEffectSkill(buff, target) {
        return buff;
    }

    addSkillWaitList() {
        this.owner.cardBattleLib.skillWaitActive.push(this);
    }

    canAddEffectToEnemy(enemy) {
        if (this.stats.percentApply * (1 + this.owner.currentStats.effectIncrease / 100 - enemy.currentStats.effectDecrease / 100) > Utility.randomRange(0, 100)) return true;
        else return false;
    }

    clone() {
        return null;
    }

    listTarget() {
        return this.heros;
    }

    getBuffSkillThisDamage(target) {
        let buff = this.buffSkill.clone();
        for (let i = 0; i < this.owner.receives.length; i++) {
            let item = this.owner.receives[i];
            buff = item.buffEffectSkill(buff, target);
        }
        for (let i = 0; i < this.owner.skills.length; i++) {
            let item = this.owner.skills[i];
            buff = item.buffEffectSkill(buff, target);
        }
        return buff;
    }

    getStatsThisDamage() {
        return this.owner.currentStats.caculateIndex(this.buffSkill, new BuffStats());
    }

    getStatsThisDamages(stats) {
        return this.owner.currentStats.caculateIndex(stats, new BuffStats());
    }

    getLevelSkill() {
        return this.stats.level;
    }

    buffEffectSkill(buff, target) {
        return buff;
    }

    isExistSkill(baseSkillId, levelSkill) {
        for (let i = 0; i < this.owner.receives.length; i++) {
            let item = this.owner.receives[i];
            if (item.stats.baseSkillId === baseSkillId && item.getLevelSkill() >= levelSkill)
                return true;
        }
        for (let i = 0; i < this.owner.skills.length; i++) {
            let item = this.owner.skills[i];
            if (item.stats.baseSkillId === baseSkillId && item.getLevelSkill() >= levelSkill)
                return true;
        }
        return false;
    }
}

module.exports = Skill;