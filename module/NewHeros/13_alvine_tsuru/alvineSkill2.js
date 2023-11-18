const Skill = require('../../Skill/skill.js');
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');
const alvineSkill1Debuff = require('./alvineSkill1Debuff.js');

class alvineSkill2 extends Skill {
    constructor(owner) {
        super(owner);
        this.deBuff = new alvineSkill1Debuff(owner);
    }

    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.order = SlotSkill.SKILL_SLOT_1;
        this.skillType = SkillType.SKILL_TYPE_POWER_FULL;

        this.stats.name = "alvine_skill_2";
        this.stats.atkType = AtkTypes.ATTACK_TYPE_ATK_HIGHEST;
        this.stats.percentAtkToDamage = 223;
        this.stats.percentApply = 50;
        this.checkLevelSkill();

        this.deBuff.initSkillOwner(owner);
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
        this.addEffectToEnemy(this.deBuff);
    }
}

module.exports = alvineSkill2;