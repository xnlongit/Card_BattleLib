const Skill = require('../../Skill/skill.js');


class cuuThuongSkill1Buff extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.stats.name = "cuu_thuong_skill_1_buff";
        this.stats.percentBuff = 20;
        this.stats.lifeTurn = 2;
    }

    clone() {
        const skillClone = new cuuThuongSkill1Buff();
        this.transferData(skillClone, this);
        return skillClone;
    }

    skillActive() {
        super.skillActive();
        this.enemy.receiveSkill(this.clone());
    }

    initSkill() {
        super.initSkill();
        this.enemy.buff.atk += this.stats.percentBuff;
    }

    recoverSkill() {
        this.enemy.buff.atk -= this.stats.percentBuff;
        super.recoverSkill();
    }
}

module.exports = cuuThuongSkill1Buff;