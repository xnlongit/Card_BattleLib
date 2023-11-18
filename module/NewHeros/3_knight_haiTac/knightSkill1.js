const Skill = require('../../Skill/skill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkType = require('../../Enum/AtkTypes.js');
const SlotSkill = require('../../Enum/SlotSkill.js');
const Utility = require('../../Common/utility.js');
const Role = require('../../Enum/Role.js');

class knightSkill1 extends Skill {
    initSkill(owner) {
        super.initSkill(owner);

        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER_FULL;

        this.stats.name = "knight_skill_1";
        this.stats.numberTarget = 1;
        this.stats.atkType = AtkType.ATTACK_TYPE_NONE;
        this.stats.percentAtkToDamage = 136;
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
    }

    dealDamageHeros() {
        this.heros = [];
        const cardBattleLib = this.owner.CardBattleLib;
        for (const type of this.stats.atkType) {
            this.heros.push(Utility.listAttack(cardBattleLib, this.owner.data.teamType, type, this.stats.numberTarget));
        }
        for (const item of this.heros) {
            if (item.data.role === Role.HERO_ROLE_DEFENCE) {
                this.dealDamage(this.stats.percentAtkToDamage + 30, item);
            } else {
                this.dealDamage(this.stats.percentAtkToDamage, item);
            }
        }
    }
}

module.exports = knightSkill1;