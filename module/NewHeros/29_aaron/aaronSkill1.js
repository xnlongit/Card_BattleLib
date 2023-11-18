const Skill = require("../../Skill/skill.js");
const aaronSkill1Debuff = require('../29_aaron/aaronSkill1Debuff.js');
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');


class aaronSkill1 extends Skill {

    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER;

        this.stats.name = "aaron_skill_1";
        this.stats.numberTarget = 3;
        this.stats.atkType.push(AtkTypes.ATTACK_TYPE_ALL_FRONT, AtkTypes.ATTACK_TYPE_ALL_MID);
        this.stats.percentAtkToDamage = 80;
        this.stats.percentApply = 30;
        this.checkLevelSkill();
        const debuff = new aaronSkill1Debuff();
        debuff.initSkillOwner(owner);

    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 95;
                break;
            case 3:
                this.stats.percentAtkToDamage = 144;
                this.stats.percentApply = 60;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
        const debuff = new aaronSkill1Debuff(); // Tạo đối tượng debuff
        debuff.initSkillOwner(this.owner);
        this.addEffectToEnemy(debuff);
    }
}

module.exports = aaronSkill1;