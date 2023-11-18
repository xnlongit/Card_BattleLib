const Skill = require("./skill.js");
const SlotSkill = require('../Enum/SlotSkill.js');
const SkillType = require('../Enum/SkillType.js');

class Skill1 extends Skill {
    initSkillOwner(owner){
        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER;

        super.initSkillOwner(owner);

        this.checkLevelSkill();
    }
}

module.exports = Skill;
