const Utility = require("../../Common/utility");
const Skill = require("../../Skill/skill.js");



class liuKangSkill1Buff extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.stats.name = "liukang_skill_1_buff";
        this.stats.percentBuff = 15;
        this.stats.lifeTurn = 2;
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 3:
                if (this.owner != this.enemy) {
                    this.stats.percentBuff = 20;
                    break;
                }
        }
    }

    clone() {
        const skillClone = new liuKangSkill1Buff();
        this.transferData(skillClone, this);
        return skillClone;
    }

    skillActive() {
        super.skillActive();
        this.owner.receiveSkill(this.clone());
        if (this.stats.level == 3) {
            const heroTakeBuff = Utility.listAttack(this.owner.cardBattleLib.heros, this.owner.data.enemyType, 'AtkHighest', 1, this.owner)[0];
            heroTakeBuff.receiveSkill(this.clone());
        }
    }

    initSkill() {
        super.initSkill();
        this.checkLevelSkill();
        this.enemy.buff.lifeTurn += this.stats.percentBuff;
    }

    recoverSkill() {
        this.enemy.buff.lifeSteal -= this.stats.percentBuff;
        super.recoverSkill();
    }
}

module.exports = liuKangSkill1Buff;