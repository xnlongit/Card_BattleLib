const Skill = require("../../Skill/skill.js");
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');

class haiQuanSkill1 extends Skill {
    initSkillOwner(owner) {
        const debuff = new haiQuanSkill1Debuff();

        super.initSkillOwner(owner);
        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER;

        this.stats.name = "hai_quan_skill_1";
        this.stats.atkType = AtkTypes.ATTACK_TYPE_NONE;
        this.stats.numberTarget = 3;
        this.stats.percentAtkToDamage = 95;
        this.stats.percentApply = 50;
        this.checkLevelSkill();

        debuff.initSkillOwner(owner);
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 114;
                break;
            case 3:
                this.stats.percentAtkToDamage = 137;
                this.stats.numberTarget = 4;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
        this.addEffectToEnemy(this.debuff);
    }
}

module.exports = haiQuanSkill1;