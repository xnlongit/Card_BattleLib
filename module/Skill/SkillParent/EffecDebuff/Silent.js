const Skill = require("../../skill.js");
const SkillPriority = require('../../../Enum/SkillPriority.js');
const TypeCrowdControl = require('../../../Enum/TypeCrowdControl.js');

class Silent extends Skill {
    constructor(owner) {
        this.owner = owner;
    }

    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.skillPriority = SkillPriority.SKILL_PRIORITY_DEBUFF;
    }

    clone() {
        const skillClone = new Silent();
        this.transferData(skillClone, this);
        return skillClone;
    }

    initSkill() {
        super.initSkill();
        this.enemy.attach(this);
        this.enemy.currentStatus.addCrowdControl(TypeCrowdControl.TYPE_CROWD_CONTROL_SILENT);
    }

    recoverSkill() {
        super.recoverSkill();
        this.enemy.detach(this);
        this.enemy.currentStatus.removeCrowdControl(TypeCrowdControl.TYPE_CROWD_CONTROL_SILENT);
    }

    updateTurnHero() {
        this.processSkill();
    }
}

module.exports = Silent;