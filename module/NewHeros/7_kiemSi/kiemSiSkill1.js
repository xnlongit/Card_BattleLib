const Skill = require("../../Skill/skill.js");
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');


class kiemSiSkill1 extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER;

        this.stats.name = "kiem_si_skill_1";
        this.stats.numberTarget = 4;
        this.stats.atkType = AtkTypes.ATTACK_TYPE_ALL_FRONT;
        this.stats.percentAtkToDamage = 136;
        this.debuff.initSkillOwner(owner);
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
        this.addEffectToEnemy(this.debuff);
    }
}

module.exports = kiemSiSkill1;