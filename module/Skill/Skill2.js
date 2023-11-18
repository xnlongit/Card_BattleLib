const SlotSkill = require('../Enum/SlotSkill.js');
const SkillType = require('../Enum/SkillType.js');
const Skill = require('./skill');

class Skill2 extends Skill {
    initSkillOwner(owner) {
        this.order = SlotSkill.SKILL_SLOT_1;
        this.skillType = SkillType.SKILL_TYPE_POWER_FULL;

        super.initSkillOwner(owner);

        this.checkLevelSkill();
    }
}

module.exports = Skill2;

