const Skill = require("../../Skill/skill.js");
const haiQuanSkill1Debuff = require("./haiQuanSkill1Debuff");
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');


class haiQuanSkill2 extends Skill {
    initSkillOwner(owner) {
        const debuff = new haiQuanSkill1Debuff();

        super.initSkillOwner(owner);
        this.order = SlotSkill.SKILL_SLOT_1;
        this.skillType = SkillType.SKILL_TYPE_POWER_FULL;

        this.stats.name = "hai_quan_skill_2";
        this.stats.numberTarget = 1;
        this.stats.atkType = AtkTypes.ATTACK_TYPE_ATK_HIGHEST;
        this.stats.percentAtkToDamage = 233;
        this.stats.percentApply = 60;
        this.checkLevelSkill();

        debuff.initSkillOwner(owner);
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
        this.addEffectToEnemy(this.debuff);
    }
}

module.exports = haiQuanSkill2;