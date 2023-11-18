const Skill = require('../../skill.js');
const SkillPriority = require('../../../Enum/SkillPriority.js');
const TypeCrowdControl = require('../../../Enum/TypeCrowdControl.js');
const Utility = require('../../../Common/utility.js');

class BreakDef extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.skillPriority = SkillPriority.SKILL_PRIORITY_BUFF;
    }

    clone() {
        const skillClone = new BreakDef();
        this.transferData(skillClone, this);
        return skillClone;
    }

    initSkill() {
        super.initSkill();
        this.enemy.attack(this);
        this.enemy.debuff.def += this.stats.percentBuff;
        this.enemy.currentStatus.addCrowdControl = TypeCrowdControl.TYPE_CROWD_CONTROL_DEFDECREASE;
    }

    recoverSkill() {
        super.recoverSkill();
        this.enemy.detach(this);
        this.enemy.debuff.def -= this.stats.percentBuff;
        this.enemy.currentStatus.removeCrowdControl = TypeCrowdControl.TYPE_CROWD_CONTROL_DEFDECREASE;
    }

    updateTurnHero(subject) {
        this.processSkill();
    }
}

module.exports = BreakDef;