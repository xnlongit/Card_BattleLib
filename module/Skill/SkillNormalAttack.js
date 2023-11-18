const Skill = require("./skill.js");
const SlotSkill = require('../Enum/SlotSkill.js');
const SkillType = require('../Enum/SkillType.js');
const AtkTypes = require('../Enum/AtkTypes.js');


class SkillNormalAttack extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.order = SlotSkill.SKILL_SLOT_NORMAL;
        this.skillType = SkillType.SKILL_TYPE_NORMAL;

        this.stats.name = "attack_normal";
        this.stats.numberTarget = 1;
        this.stats.atkType = AtkTypes.ATTACK_TYPE_NORMAL;
        this.stats.percentAtkToDamage = 100;
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
    }
}

module.exports = SkillNormalAttack;