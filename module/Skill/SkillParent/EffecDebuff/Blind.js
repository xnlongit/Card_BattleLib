const Skill = require("../../skill.js");
const SkillPriority = require('../../../Enum/SkillPriority.js');
const TypeCrowdControl = require('../../../Enum/TypeCrowdControl.js');

class Blind extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.skillPriority = SkillPriority.SKILL_PRIORITY_DEBUFF;
    }

    clone() {
        const skillClone = new Blind();
        this.transferData(skillClone, this);
        return skillClone;
    }

    initSkill() {
        super.initSkill();
        this.enemy.attack(this);
        this.enemy.debuff.hitRate += this.stats.percentAtkToBuff;
        this.enemy.currentStatus.addCrowdControl = TypeCrowdControl.TYPE_CROWD_CONTROL_BLIND;
    }

    recoverSkill() {
        super.recoverSkill();
        this.enemy.detach(this);
        this.enemy.debuff.hitRate -= this.stats.percentBuff;
        this.enemy.currentStatus.removeCrowdControl = TypeCrowdControl.TYPE_CROWD_CONTROL_BLIND;
    }

    updateTurnHero(subject) {
        this.processSkill();
    }
}

module.exports = Blind;