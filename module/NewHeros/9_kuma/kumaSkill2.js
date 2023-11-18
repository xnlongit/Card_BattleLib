const Skill = require("../../Skill/skill.js");
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');


class kumaSkill2 extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.order = SlotSkill.SKILL_SLOT_1;
        this.skillType = SkillType.SKILL_TYPE_POWER_FULL;

        this.stats.name = "kuma_skill_2";
        this.stats.numberTarget = 1;
        this.stats.atkType = AtkTypes.ATTACK_TYPE_NONE;
        this.stats.percentAtkToDamage = 195;
        this.checkLevelSkill();

        this.buff.initSkillOwner(owner);
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 280;
                break;
            case 3:
                this.stats.percentAtkToDamage = 336;
                this.stats.percentApply = 80;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
        this.buff.skillActive();
    }
}

module.exports = kumaSkill2;