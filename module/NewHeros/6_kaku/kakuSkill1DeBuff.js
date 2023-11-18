const Skill = require("../../Skill/skill.js");



class kakuSkill1DeBuff extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.stats.name = "kaku_skill_1_debuff";
        this.stats.percentBuff = 10;
        this.stats.lifeTurn = 2;
    }

    clone() {
        const skillClone = new kakuSkill1DeBuff();
        this.transferData(skillClone, this);
        return skillClone;
    }

    skillActive() {
        super.skillActive();
        this.enemy.receiveSkill(this.clone());
    }

    initSkill() {
        super.initSkill();
        this.enemy.debuff.def += this.stats.percentBuff;
    }

    recoverSkill() {
        this.enemy.debuff.def -= this.stats.percentBuff;
        super.recoverSkill();
    }
}

module.exports = kakuSkill1DeBuff;