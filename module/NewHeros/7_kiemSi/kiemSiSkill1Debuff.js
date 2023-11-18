const Skill = require("../../Skill/skill.js");



class kiemSiSkill1Debuff extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.stats.name = "kiem_si_skill_1_debuff";
        this.stats.percentBuff = 15;
        this.stats.lifeTurn = 2;
    }

    clone() {
        const skillClone = new kiemSiSkill1Debuff();
        this.transferData(skillClone, this);
        return skillClone;
    }

    skillActive() {
        super.skillActive();
        this.enemy.receiveSkill(this.clone());
    }

    initSkill() {
        super.initSkill();
        this.enemy.debuff.healingRecieveBonus += this.stats.percentBuff;
    }

    recoverSkill() {
        this.enemy.debuff.physicBonus -= this.stats.percentBuff;
        super.recoverSkill();
    }
}

module.exports = kiemSiSkill1Debuff;