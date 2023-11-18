const Skill = require('../../Skill/skill.js');
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');

class kidSkill1 extends Skill {
    initSkillOwner(owner) {
        const debuff = new kidSkill1Debuff();

        super.initSkillOwner(owner);

        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER;

        this.stats.name = "kid_skill_1";
        this.stats.atkType = AtkTypes.ATTACK_TYPE_NONE;
        this.stats.numberTarget = 1;
        this.stats.percentAtkToDamage = 146;
        this.buffSkill.penentration += 30;
        this.checkLevelSkill();

        debuff.initSkillOwner(owner);
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 175;
                break;
            case 3:
                this.stats.percentAtkToDamage = 210;
                this.stats.numberTarget = 4;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
        if (this.stats.level == 3) {
            this.addEffectToEnemy(this.debuff);
        }
    }
}

module.exports = kidSkill1;