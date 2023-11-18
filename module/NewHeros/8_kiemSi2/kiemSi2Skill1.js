const Skill = require("../../Skill/skill.js");
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');

class kiemSi2Skill extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER;

        this.stats.name = "kiem_si_2_skill_1";
        this.stats.numberTarget = 1;
        this.stats.atkType = AtkTypes.ATTACK_TYPE_NONE;
        this.stats.buffType = AtkTypes.ATTACK_TYPE_HEALTH_LOWEST;
        this.stats.percentAtkToDamage = 190;
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
        this.healHeros(2);
    }
}

module.exports = kiemSi2Skill;