const Skill = require("../../Skill/skill.js");
const SkillPriority = require('../../Enum/SkillPriority.js');
const SkillType = require('../../Enum/SkillType.js');

class kiemSiSkill2Buff extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.skillPriority = SkillPriority.SKILL_PRIORITY_BUFF;
        this.skillType = SkillType.SKILL_TYPE_PASSIVE;

        this.stats.name = "kiem_si_skill_2_buff";
        this.stats.isInfinity = true;
        this.stats.canCleanBySkill = false;

        owner.receiveSkill(this.clone());
    }

    clone() {
        const skillClone = new kiemSiSkill2Buff();
        this.transferData(skillClone, this);
        return skillClone;
    }

    initSkill() {
        super.initSkill();
        this.owner.buff.atk += 10;
        this.owner.buff.health += 5;
    }

    recoverSkill() {
        this.owner.buff.atk -= 10;
        this.owner.buff.health -= 5;
        super.recoverSkill();
    }
}

module.exports = kiemSiSkill2Buff;