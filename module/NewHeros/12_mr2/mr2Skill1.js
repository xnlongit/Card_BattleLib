const Skill = require("../../Skill/skill.js");
const SlotSkill = require('../..//Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');
const DamageData = require('../../Data/DamageData.js');
const TypeCrowdControl = require('../../Enum/TypeCrowdControl.js');
const DamageType = require('../../Enum/DamageType.js');
const Utility = require("../../Common/utility.js");


class mr2Skill1 extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER;

        this.stats.name = "mr2_skill_1";
        this.stats.atkType = AtkTypes.ATTACK_TYPE_ALL_FRONT;
        this.stats.numberTarget = 3;
        this.stats.percentAtkToDamage = 117;
        this.checkLevelSkill();
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 140;
                break;
            case 3:
                this.stats.percentAtkToDamage = 168;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
    }

    dealDamage(percentAtkToDamage, enemy) {
        const data = new DamageData(this.owner);
        data.type = this.owner.data.DamageType;
        const buffSkill = this.buffSkill.clone();
        if (this.stats.level == 3) {
            if (enemy.currentStatus.isThisCcActive(TypeCrowdControl.TYPE_CROWD_CONTROL_FREEZE)) {
                this.buffSkill.endDamage += 30;
            }
        }
        if (enemy.data.role == role.strength) {
            buffSkill.critChance += 20;
        }

        const thisDamageStats = this.getStatsThisDamages(buffSkill);
        const bonusType = 0;
        bonusSkillDamage = 0;
        if (data.type == DamageType.DAMAGE_TYPE_PHYSIC) {
            bonusType = thisDamageStats.physicBonus / 100;
        } else {
            bonusType = thisDamageStats.magicBonus / 100;
        }

        if (this.skillType == SkillType.SKILL_TYPE_POWER || this.skillType == SkillType.SKILL_TYPE_POWER_FULL) {
            bonusSkillDamage = thisDamageStats.skillBonus / 100;
        }

        const damage = thisDamageStats.atk * percentAtkToDamage / 100 * (1 + bonusType + bonusSkillDamage);
        if (thisDamageStats.critChance - enemy.currentStats.critResistance > Utility.randomRange(0, 100)) {
            damage *= thisDamageStats.critDamage / 100;
            data.isCrit = true;
        }
        data.damage = damage;
        if (enemy.currentStats.dodgeRate - thisDamageStats.hitRate > Utility.randomRange(0, 100)) {
            data.isDodge = true;
        }
        if (!data.isDodge) {
            let healthRecover = data.damage * thisDamageStats.lifeSteal / 100;
            this.owner.currentHealth.current += healthRecover;
            this.owner.recoverHealth(healthRecover, this.owner, false);
        }

        enemy.takeDamage(data);
    }
}

module.exports = mr2Skill1;