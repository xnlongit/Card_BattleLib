const Skill = require('../../skill.js');
const SkillPriority = require('../../../Enum/SkillPriority.js');
const TypeCrowdControl = require('../../../Enum/TypeCrowdControl.js');
const IObsTurnHero = require('../../../Even/IObsTurnHero.js');
const IObsTakeDamage = require('../../../Even/IObsTakeDamage.js');

class Freeze extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.skillPriority = SkillPriority.SKILL_PRIORITY_BUFF;
    }

    clone() {
        const skillClone = new Freeze();
        this.transferData(skillClone, this);
        return skillClone;
    }

    initSkill() {
        super.initSkill();
        this.enemy.attach(this);
        this.enemy.attach(this);
        this.enemy.currentStatus.addCrowdControl(TypeCrowdControl.TYPE_CROWD_CONTROL_FREEZE);
    }

    recoverSkill() {
        super.recoverSkill();
        this.enemy.detach(this);
        this.enemy.detach(this);
        this.enemy.currentStatus.removeCrowdControl(TypeCrowdControl.TYPE_CROWD_CONTROL_FREEZE);
    }

    updateTakeDamage(subject) {
        this.stack--;
        if (this.stack <= 0) {
            this.recoverSkill();
        }
    }

    updateTurnHero(subject) {
        this.processSkill();
    }
}

module.exports = Freeze;