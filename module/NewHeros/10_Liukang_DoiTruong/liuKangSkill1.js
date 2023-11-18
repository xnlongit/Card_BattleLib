const Skill = require("../../Skill/skill.js");
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');

class liuKangSkill1 extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER;

        this.stats.name = "liukang_skill_1";
        this.stats.atkType = AtkTypes.ATTACK_TYPE_NONE;
        this.stats.percentAtkToDamage = 159;
        this.checkLevelSkill();

        this.buff.initSkillOwner(owner);
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 190;
                break;
            case 3:
                this.stats.percentAtkToDamage = 228;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
        this.buff.skillActive();
    }
}

module.exports = liuKangSkill1;