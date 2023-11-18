const Skill = require('../../Skill/skill.js');
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkType = require('../../Enum/AtkTypes.js');

class satThuSkill1 extends Skill {
    initSkill(owner) {
        super.initSkill(owner);
        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER;

        this.stats = {
            name: 'sat_thu_skill_1',
            percentAtkToDamage: 171,
            numberTarget: 1,
            atkType: AtkType.ATTACK_TYPE_ALL,
        };
        this._buffSkill.critChance += 20;

    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
    }
};

module.exports = satThuSkill1;