const Skill2 = require('../../Skill/Skill2.js');
const AtkTypes = require('../../Enum/AtkTypes.js');
const nicorobinSkill1 = require('./nicorobinSkill1');
const TypeCrowdControl = require('../../Enum/TypeCrowdControl.js');
const utility = require('../../Common/utility.js');

class nicorobinSkill2 extends Skill2 {
    initSkillOwner(owner) {
        const debuff = new nicorobinSkill2DeBuff();

        this.stats.name = "nicorobin_skill_2";
        this.stats.numberTarget = 4;
        this.stats.atkType = AtkTypes.ATTACK_TYPE_ALL_FRONT;
        this.stats.percentAtkToDamage = 122;
        this.stats.percentApply = 50;

        super.initSkillOwner(owner);
        debuff.initSkillOwner(owner);
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
        this.addEffectToEnemy(this.debuff);
    }

    canAddEffectToEnemy(enemy) {
        const percent = this.stats.percentApply;
        if (this.stats.level == 3) {
            if (enemy.currentStatus.isThisccActive(TypeCrowdControl.TYPE_CROWD_CONTROL_IGNITE)) {
                percent = 80;
            }
        }
        if (percent * (1 + this.owner.currentStatus.effectIncrease / 100 - enemy.currentStatus / effectDecrease / 100) > utility.randomRange(0, 100)) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = nicorobinSkill2;