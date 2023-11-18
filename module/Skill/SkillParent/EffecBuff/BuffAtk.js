const Skill = require("../../skill.js");
const SkillPriority = require('../../../Enum/SkillPriority.js');
const TypeBuffControl = require('../../../Enum/TypeBuffControl.js');

class BuffAtk extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.skillPriority = SkillPriority.SKILL_PRIORITY_BUFF;
    }

    clone() {
        super.clone();
        const skillClone = new BuffAtk();
        this.transferData(this, skillClone);
        return skillClone;
    }

    initSkill() {
        super.initSkill();
        this.enemy.cardBattleLib.attachEndTurn(this);
        this.enemy.buff.atk += this.stats.percentBuff;
        this.enemy.currentBuff.addBuff = TypeBuffControl.TYPE_BUFF_CONTROL_ATK;
    }

    recoverSkill() {
        this.enemy.buff.atk -= this.stats.percentBuff;
        this.enemy.currentBuff.removeBuff = TypeBuffControl.TYPE_BUFF_CONTROL_ATK;
        super.recoverSkill();
    }

    updateTurnHero(subject) {
        this.processSkill();
    }
}

module.exports = BuffAtk;