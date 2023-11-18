const Skill = require("../../Skill/skill");
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const Atktypes = require('../../Enum/AtkTypes');

class quancmSkill1 extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER;

        this.stats.name = "quancm_skill_1";
        this.stats.numberTarget = 1;
        this.stats.atkType = Atktypes.ATTACK_TYPE_NONE;
        this.stats.percentAtkToDamage = 190;
        this.buff.initSkillOwner(owner);
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
        this.buff.skillActive();
    }
}

module.exports = quancmSkill1;