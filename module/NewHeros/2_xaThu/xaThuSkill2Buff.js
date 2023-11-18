const Skill = require('../../Skill/skill.js');
const SkillPriority = require('../../Enum/SkillPriority.js');
const SkillType = require('../../Enum/SkillType.js');

class xaThuSkill2Buff extends Skill {
    initSkill(owner) {
        super.initSkill(owner);
        this.skillPriority = SkillPriority.SKILL_PRIORITY_BUFF;
        this.skillType = SkillType.SKILL_TYPE_PASSIVE;

        this.stats.name = "xa_thu_skill_2_buff";
        this.stats.isInfinity = true;
        this.stats.canCleanBySkill = false;

        owner.ReceiveSkill(this.clone());
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

module.exports = xaThuSkill2Buff;