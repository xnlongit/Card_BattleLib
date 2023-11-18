const Skill = require("../../skill.js");
const SkillPriority = require('../../../Enum/SkillPriority.js');
const TypeCrowdControl = require('../../../Enum/TypeCrowdControl.js');


class Stun extends Skill {
    constructor(owner) {
        this.owner = owner;
    }

    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.skillPriority = SkillPriority.SKILL_PRIORITY_DEBUFF;
    }

    clone() {
        const skillClone = new Stun();
        this.transferData(skillClone, this);
        return skillClone;
    }

    initSkill() {
        super.initSkill();
        this.enemy.attach(this);
        this.enemy.currentStatus.addCrowdControl(TypeCrowdControl.TYPE_CROWD_CONTROL_STUN);
    }

    recoverSkill() {
        super.recoverSkill();
        this.enemy.detach(this);
        this.enemy.currentStatus.removeCrowdControl(TypeCrowdControl.TYPE_CROWD_CONTROL_STUN);
    }

    updateTurnHero(subject) {
        this.processSkill();
    }
}

module.exports = Stun;