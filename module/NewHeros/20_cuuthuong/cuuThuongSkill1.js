const Skill = require("../../Skill/skill.js");
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');

class cuuThuongSKill1 extends Skill {
    constructor() {
        const buff = new cuuThuongSKill1();
    }

    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER;

        this.stats.name = "cuu_thuong_skill_1";
        this.stats.numberTarget = 1;
        this.stats.atkType = AtkTypes.ATTACK_TYPE_ATK_HIGHEST;
        this.stats.percentAtkToBuff = 150;
        buff.initSkillOwner(owner);
        this.checkLevelSkill();
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToBuff = 181;
                break;
            case 3:
                this.stats.percentAtkToBuff = 217;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.healHeros(this.stats.numberTarget);
        this.addEffectToEnemy(this.buff);
    }
}

module.exports = cuuThuongSKill1;