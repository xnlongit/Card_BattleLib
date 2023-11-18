const Skill = require("../../Skill/skill.js");


class haiQuanSkill1Debuff extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.stats.name = "hai_quan_skill_1_debuff";
        this.stats.percentBuff = 15;
        this.stats.lifeTurn = 2;
    }

    clone() {
        const skillClone = new haiQuanSkill1Debuff();
        this.transferData(skillClone, this);
        return skillClone;
    }

    initSkill() {
        super.initSkill();
        this.enemy.debuff.speed += this.stats.percentBuff;
    }

    recoverSkill() {
        this.enemy.debuff.speed -= this.stats.percentBuff;
        super.recoverSkill();
    }
}

module.exports = haiQuanSkill1Debuff;