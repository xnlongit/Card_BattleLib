const Skill = require("../../Skill/skill.js");
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');
const utility = require('../../Common/utility.js');

class kumaSkill1 extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER;

        this.buffSkill.lifeSteal += 20;
        this.stats.name = "kuma_skill_1";
        this.stats.atkType = AtkTypes.ATTACK_TYPE_ALL_FRONT;
        this.stats.atkType = AtkTypes.ATTACK_TYPE_ALL_MID;
        this.stats.numberTarget = 7;
        this.stats.percentAtkToDamage = 111;
        this.checkLevelSkill();
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 123;
                break;
            case 3:
                this.stats.percentAtkToDamage = 135;
                this.stats.numberTarget = 4;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
    }

    dealDamageHeros() {
        this.heros = [];
        const cardBattleLib = this.owner.cardBattleLib;

        for (const type of this.stats.atkType) {
            this.heros.push(...utility.listAttack(cardBattleLib.heros, this.owner.data.teamType, type, this.stats.numberTarget, this.owner));
        }
        if (this.stats.level == 3) {
            this.buffSkill.healingBonus += this.heros.count * 10;
        }
        for (const item of this.heros) {
            this.dealDamage(this.stats.percentAtkToDamage, item);
        }
        if (this.stats.level == 3) {
            this.buffSkill.healingBonus -= this.heros.count * 10;
        }
    }
}

module.exports = kumaSkill1;