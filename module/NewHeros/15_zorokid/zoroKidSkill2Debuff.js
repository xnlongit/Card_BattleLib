const Poison = require('../../Skill/SkillParent/EffecDebuff/Poison.js');
const DamageData = require('../../Data/DamageData.js');
const DamageType = require('../../Enum/DamageType.js');
const DotType = require('../../Enum/DotType.js');
const SkillType = require('../../Enum/SkillType.js');
const utility = require('../../Common/utility.js');



class zoroKidSkill2Debuff extends Poison {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.stats.name = "zorokid_skill_2_debuff";
        this.stats.lifeTurn = 2;
        this.type = DotType.DOT_TYPE_PERCENT_MAXHEALTH;
    }

    dealDamagePercentHealth(percent, enemy, type) {
        const data = new DamageData(this.owner);
        data.type = this.owner.data.DamageType;

        const thisDamageStats = this.getStatsThisDamage();
        const bonusType = 0;
        const bonusSkillDamage = 0;
        if (data.type == DamageType.DAMAGE_TYPE_PHYSIC) {
            bonusType = thisDamageStats.physicBonus / 100;
        } else {
            bonusType = thisDamageStats.magicBonus / 100;
        }
        if (this.skillType == SkillType.SKILL_TYPE_POWER || this.skillType == SkillType.SKILL_TYPE_POWER_FULL) {
            bonusSkillDamage = thisDamageStats.skillBonus / 100;
        }

        const damage = 0;
        if (type == DotType.DOT_TYPE_PERCENT_CURHEALTH) {
            damage = enemy.currentHealth.current * percent / 100 * (1 + bonusType + bonusSkillDamage);
        } else {
            damage = enemy.currentHealth.max * percent / 100 * (1 + bonusType + bonusSkillDamage);
        }

        if (this.owner.currentStats.atk * 2.5 < damage) {
            damage = this.owner.currentStats.atk * 2.5;
        }
        if (thisDamageStats.critChance - enemy.currentStats.critResistance > utility.randomRange(0, 100)) {
            damage = this.owner.currentStats.critDamage / 100;
            data.isCrit = true;
        }
        data.damage = damage;
        if (enemy.currentStats.dodgeRate - thisDamageStats.hitRate > utility.randomRange(0, 100)) {
            data.isDodge = true;
        }
        if (!data.isDodge) {
            const heathRecover = data.damage * thisDamageStats.lifeSteal / 100;
            this.owner.currentHealth.current += heathRecover;
            this.owner.heathRecover(heathRecover, this.owner, false);
        }
        enemy.takeDamage(data);
    }
}

module.exports = zoroKidSkill2Debuff;