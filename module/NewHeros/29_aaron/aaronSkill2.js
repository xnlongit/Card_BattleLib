const Skill = require("../../Skill/skill.js");
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');
const Utility = require('../../Common/utility.js');
const typeCrowdControl = require('../../Enum/TypeCrowdControl.js')

class aaronSkill2 extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.order = SlotSkill.SKILL_SLOT_1;
        this.skillType = SkillType.SKILL_TYPE_POWER_FULL;

        this.stats.name = "aaron_skill_2";
        this.stats.numberTarget = 3;
        this.stats.atkType.push(AtkTypes.ATTACK_TYPE_NONE);
        this.stats.percentAtkToDamage = 111;
        this.checkLevelSkill();
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 133;
                break;
            case 3:
                this.stats.percentAtkToDamage = 160;
                this.stats.numberTarget = 4;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
    }

    dealDamageHeros() {
        this.heros.length = 0;
        let cardBattleLib = this.owner.cardBattleLib;

        for(let i = 0; i < this.stats.atkType.length; i ++) {
            let type = this.stats.atkType[i];
            this.heros = this.heros.concat(Utility.listAttack(cardBattleLib.heros, this.owner.data.teamType, type, this.stats.numberTarget));
        }
        for(let i = 0; i < this.heros.length; i ++) {
            let item = this.heros[i];
            if (item.currentStatus.isThisCcActive(typeCrowdControl.TYPE_CROWL_CONTROL_IGNITE))
                this.dealDamage(this.stats.percentAtkToDamage + 30, item);
            else
                this.dealDamage(this.stats.percentAtkToDamage, item);
        }
    }

    clone(){
        let skillClone = new aaronSkill2(this.initData);
        this.transferData(this, skillClone);
        return skillClone;
    }
}

module.exports = aaronSkill2;