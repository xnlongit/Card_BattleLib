const SkillSlot = require("../../Enum/SlotSkill");
const Skill = require("../../Skill/skill.js");
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');
const alvineSkill1Debuff = require('../13_alvine_tsuru/alvineSkill1Debuff.js')

class alvineSkill1 extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.order = SkillSlot.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER;

        this.stats.name = "alvine_skill_1";
        this.stats.atkType = AtkTypes.ATTACK_TYPE_FORWARD;
        this.stats.percentAtkToDamage = 113;
        this.stats.percentApply = 70;
        this.checkLevelSkill();

        const debuff = new alvineSkill1Debuff();
        debuff.initSkillOwner(owner);
        
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 136;
                break;
            case 3:
                this.stats.percentAtkToDamage = 163;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
        this.addEffectToEnemy(this.debuff);
    }
}

module.exports = alvineSkill1;