const Skill = require("../../Skill/skill");
const SkillPriority = require('../../Enum/SkillPriority.js');
const SkillType = require('../../Enum/SkillType.js');

class deathNoteSkill2Buff extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.skillPriority = SkillPriority.SKILL_PRIORITY_BUFF;
        this.skillType = SkillType.SKILL_TYPE_PASSIVE;

        this.stats.name = "death_note_skill_2_buff";
        this.stats.isInfinity = true;
        this.stats.canCleanBySkill = false;

        owner.receiveSkill(this.clone());
    }

    clone() {
        const skillClone = new deathNoteSkill2Buff(this.initData);
        this.transferData(this, skillClone);
        return skillClone;
    }

    initSkill() {
        super.initSkill();
        this.owner.buff.atk += 10;
        this.owner.buff.health += 5;
        this.owner.caculateStats();
    }

    recoverSkill() {
        this.owner.buff.atk -= 10;
        this.owner.buff.health -= 5;
        this.owner.caculateStats();
        super.recoverSkill();
    }
}

module.exports = deathNoteSkill2Buff;