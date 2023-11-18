const Skill = require("../../skill.js");
const DotType = require('../../../Enum/DotType.js');
const SkillPriority = require('../../../Enum/SkillPriority.js');
const TypeCrowdControl = require('../../../Enum/TypeCrowdControl.js');

class Poison extends Skill {
    constructor(owner) {
        this.owner = owner;
        this.type = DotType.DOT_TYPE;
    }

    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.skillPriority = SkillPriority.SKILL_PRIORITY_DEBUFF;
    }

    clone() {
        const skillClone = new Poison();
        this.transferData(skillClone, this);
        return skillClone;
    }

    initSkill() {
        super.initSkill();
        this.enemy.attach(this);
        this.enemy.currentStatus.addCrowdControl(TypeCrowdControl.TYPE_CROWD_CONTROL_POISON);
    }

    updateTurnHero(subject) {
        this.processSkill();
    }

    processSkill() {
        if (this.stats.isInfinity) return;
        if (this.enemy.currentHealth.isOverHealth) {
            this.recoverSkill();
            return;
        }
        if (this.currentLifeTurn <= 0) return;
        if (this.type == DotType.DOT_TYPE_ATK) {
            this.dealDamage(this.stats.percentAtkToDamage, this.enemy);
        } else {
            this.dealDamagePercentHealth(this.stats.percentAtkToDamage, this.enemy, this.type);
        }
        this.currentLifeTurn--;
        if (this.currentLifeTurn == 0) {
            this.recoverSkill();
        }
    }
}

module.exports = Poison;