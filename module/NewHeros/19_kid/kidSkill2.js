const Skill = require('../../Skill/skill.js');
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');


class kidSkill2 extends Skill {
    constructor() {
        const isBoost = false;
    }

    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.order = SlotSkill.SKILL_SLOT_1;
        this.skillType = SkillType.SKILL_TYPE_POWER_FULL;

        this.stats.name = "hai_quan_skill_2";
        this.stats.numberTarget = 7;
        this.stats.atkType = AtkTypes.ATTACK_TYPE_ALL_FRONT;
        this.stats.atkType = AtkTypes.ATTACK_TYPE_ALL_MID;
        this.stats.percentAtkToDamage = 101;
        this.checkLevelSkill();
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 122;
                break;
            case 3:
                this.stats.percentAtkToDamage = 146;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        if (this.owner.currentHealth.percentHealth < 0.5) {
            if (!this.isBoost) {
                this.buffSkill.penentration += 20;
                this.isBoost = true;
            }
        }
        if (this.owner.currentHealth.percentHealth > 0.5) {
            if (this.isBoost) {
                this.buffSkill.penentration -= 20;
                this.isBoost = false;
            }
        }
        this.dealDamageHeros();
    }
}

module.exports = kidSkill2;