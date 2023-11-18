const Skill = require("../../Skill/skill");

class quancmSkill1Buff extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.stats.name = "quancm_skill_1_buff";
        this.stats.percentBuff = 10;
        this.stats.lifeTurn = 2;
    }

    clone() {
        const skillClone = new quancmSkill1Buff();
        this.transferData(skillClone, this);
        return skillClone;
    }

    skillActive() {
        super.skillActive();
        this.owner.receiveSkill(this.clone());
    }

    initSkill() {
        super.initSkill();
        this.owner.buff.physicBonus += this.stats.percentBuff;
    }

    recoverSkill() {
        this.owner.buff.physicBonus -= this.stats.percentBuff;
        super.recoverSkill();
    }
}

module.exports = quancmSkill1Buff;