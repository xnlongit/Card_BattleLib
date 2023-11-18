const Skill = require("../../Skill/skill.js");


class cuuThuongSkill2Buff extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.stats.name = "cuu_thuong_skill_2_buff";
        this.stats.percentBuff = 15;
        this.stats.lifeTurn = 2;
    }

    clone() {
        const skillClone = cuuThuongSkill2Buff();
        this.transferData(skillClone, this);
        return skillClone;
    }

    skillActive() {
        super.skillActive();
        this.enemy.receiveSkill(this.clone());
    }

    initSkill() {
        super.initSkill();
        this.enemy.buff.def += this.stats.percentBuff;
    }

    recoverSkill(){
        this.enemy.buff.def -= this.stats.percentBuff;
        super.recoverSkill();
    }
}

module.exports = cuuThuongSkill2Buff;