const Skill = require('../../Skill/skill.js');
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkTypes = require('../../Enum/AtkTypes.js');

class cuuThuongSkill2 extends Skill {
    initSkillOwner(owner) {
        const buff = new cuuThuongSkill2();

        super.initSkillOwner(owner);
        this.order = SlotSkill.SKILL_SLOT_1;
        this.skillType = SkillType.SKILL_TYPE_POWER_FULL;

        this.stats.name = "cuu_thuong_skill_2";
        this.stats.atkType = AtkTypes.ATTACK_TYPE_ALL;
        this.stats.percentAtkToBuff = 74;
        this.checkLevelSkill();
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 89;
                break;
            case 3:
                this.stats.percentAtkToDamage = 106;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.healHeros(this.stats.numberTarget);
        if (this.stats.level == 3) {
            this.addEffectToEnemy(this.buff)
        }
    }
}

module.exports = cuuThuongSkill2;