const Skill1 = require('../../Skill/Skill1.js');
const AtkTypes = require('../../Enum/AtkTypes.js');
const Role = require('../../Enum/Role.js');
const utility = require('../../Common/utility.js');

class zoroKidSkill1 extends Skill1 {
    initSkillOwner(owner) {
        const debuff = new zoroKidSkill1Debuff();

        this.stats.name = "zorokid_skill_1";
        this.stats.atkType = AtkTypes.ATTACK_TYPE_NONE;
        this.stats.numberTarget = 4;
        this.stats.percentAtkToDamage = 80;

        super.initSkillOwner(owner);
        debuff.initSkillOwner(owner);
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 96;
                break;
            case 3:
                this.stats.percentAtkToDamage = 115;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
        this.addEffectToEnemy(this.debuff);
    }

    canAddEffectToEnemy(enemy) {
        if (this.stats.level == 3) {
            if (enemy.data.Role == Role.HERO_ROLE_DEFENCE) {
                return true;
            }
        }
        if (this.stats.percentApply * (1 + this.owner.currentStatus.effectincrease / 100 - enemy.currentStatus.effectDecrease / 100) > utility.randomRange(0, 100)) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = zoroKidSkill1;