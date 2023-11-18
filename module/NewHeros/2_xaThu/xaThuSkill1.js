const Skill = require('../../Skill/skill.js');
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkType = require('../../Enum/AtkTypes.js');


class xaThuSkill1 extends Skill {
    initSkill(owner) {
        super.initSkill(owner);
        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER;

        this.buffSkill.penentration += 15;
        this.stats.name = "xa_thu_skill_1";
        this.stats.numberTarget = 2;
        this.stats.atkType = AtkType.ATTACK_TYPE_NONE;
        this.stats.percentAtkToDamage = 122;
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
    }
};

module.exports = xaThuSkill1;