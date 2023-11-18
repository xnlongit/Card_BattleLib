const Skill = require('../../Skill/skill.js');
const mr2Skill2Buff = require('./mr2Skill2Buff.js');
const TypeCrowdControl = require('../../Enum/TypeCrowdControl.js');
const Utility = require('../../Common/utility.js');
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');

class mr2Skill2 extends Skill {
    constructor() {
        super();
        this.debuff = new mr2Skill2Buff();
    }

    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.order = SlotSkill.SKILL_SLOT_1;
        this.skillType = SkillType.SKILL_TYPE_POWER_FULL;

        this.stats.name = "mr2_skill_2";
        this.stats.numberTarget = 1;
        this.stats.atkType = AtkTypes.ATTACK_TYPE_HEALTH_LOWEST;
        this.stats.percentApply = 50;
        this.checkLevelSkill();

        this.debuff.initSkillOwner(owner);
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 280;
                break;
            case 3:
                this.stats.percentAtkToDamage = 336;
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
        if (enemy.currentStatus.isThisCcActive(TypeCrowdControl.TYPE_CROWD_CONTROL_SLOW)) {
            percent += 30;
        }
        if (percent * (1 + this.owner.currentStatus.effectIncrease / 100 - enemy.currentStatus.effectDecrease / 100) > Utility.randomRange(0, 100)) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = mr2Skill2;