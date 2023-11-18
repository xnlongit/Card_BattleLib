const Skill = require("../../Skill/skill.js");
const SkillPriority = require('../../Enum/SkillPriority.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');
const { SKILL_SLOT_1 } = require("../../Enum/SlotSkill");
const Shield = require('../../Skill/Shield.js');

class liuKangSkill2 extends Shield {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.order = SKILL_SLOT_1;
        this.skillType = SkillType.SKILL_TYPE_POWER_FULL;

        this.stats.name = "liukang_skill_2";
        this.stats.atkType = AtkTypes.ATTACK_TYPE_NONE;
        this.stats.percentAtkToDamage = 223;
        this.checkLevelSkill();

        this.buff.initSkillOwner(owner);
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 280;
                break;
            case 3:
                this.stats.percentAtkToDamage = 336;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
        this.buff.skillActive(this.owner.allDamageDealed * 0.3);
    }
}

module.exports = liuKangSkill2;