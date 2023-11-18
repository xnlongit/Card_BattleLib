const Skill = require("../../Skill/skill.js");


class kumaSkill2Buff extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.stats.name = "kuma_skill_2_buff";
        this.stats.percentBuff = 10;
        this.stats.percentAtkToBuff = 80;
        this.stats.lifeTurn = 2;
        this.checkLevelSkill();
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                break;
            case 3:
                this.stats.percentAtkToBuff = 100;
                break;
        }
    }

    clone() {
        const skillClone = new kumaSkill2Buff();
        this.transferData(skillClone, this);
        return skillClone;
    }

    skillActive() {
        super.skillActive();
        this.owner.receiveSkill(this.clone());
    }

    initSkill() {
        super.initSkill();
        this.owner.buff.lastBreath += this.stats.percentBuff;
    }

    recoverSkill() {
        this.owner.buff.lastBreath -= this.stats.percentBuff;
        super.recoverSkill();
    }

    updateTakeDamage(subject) {
        if (this.stack > 0) {
            this.stack--;
            this.recoverHealth(this.stats.percentAtkToBuff, this.owner);
        }
    }
}

module.exports = kumaSkill2Buff;