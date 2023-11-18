const Skill2 = require("../../Skill/Skill2.js");
const AtkTypes = require('../../Enum/AtkTypes.js');
const DamageDaTa = require('../../Data/DamageData.js');
const DamageType = require("../../Enum/DamageType.js");
const SkillType = require('../../Enum/SkillType.js');

class peronaSkill2 extends Skill2 {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.stats.name = "perona_skill_2";
        this.stats.numberTarget = 1;
        this.stats.atkType = AtkTypes.ATTACK_TYPE_ALL_BACK;
        this.stats.percentAtkToDamage = 233;
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 146;
                break;
            case 3:
                this.stats.percentAtkToDamage = 175;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
    }

    dealDamage(percentAtkToDamage, enemy) {
        const data = new DamageData(this.owner);
        const damageType = DamageType.DAMAGE_TYPE;
        data.type = this.owner.data.damageType;

        const thisDamageStats = this.getStatsThisDamage;
        const bonusType = 0;
        const bonusSkillDamage = 0;
        if (data.type == DamageType.DAMAGE_TYPE_PHYSIC) {
            bonusType = thisDamageStats.physicBonus / 100;
        } else {
            bonusType = thisDamageStats.magicBonus / 100;
        }
        if (skillType == SkillType.SKILL_TYPE_POWER || skillType == SkillType.SKILL_TYPE_POWER_FULL) {
            bonusSkillDamage = thisDamageStats.skillBonus / 100;
        }

        const bonusHp = 0;

        if (enemy.currentHealth.percenHealth > 0.5) {
            bonusHp = 0.3;
        }

        const damage = thisDamageStats.atk * percentAtkToDamage / 100 * (1 + bonusType + bonusSkillDamage + bonusHp);

        if (thisDamageStats.critChance - enemy.currentStats.critResistance > utility.randomRange(0, 100)) {
            if (this.stats.level === 3) {
                damage *= (thisDamageStats.critDamage / 100 + 0.3);
            } else {
                damage *= thisDamageStats.critDamage / 100;
            }
            data.isCrit = true;
        }

        data.damage = damage;

        if (enemy.currentStats.dodgeRate - thisDamageStats.hitRate > utility.randomRange(0, 100)) {
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

module.exports = peronaSkill2;