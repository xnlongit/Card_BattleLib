const Skill = require('../../skill.js');
const SkilPriority = require('../../../Enum/SkillPriority.js');
const SkillType = require('../../../Enum/SkillType.js');
const TypeBuffControl = require('../../../Enum/TypeBuffControl.js');

class BuffPassiveHero extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.skilPriority = SkilPriority.SKILL_PRIORITY_BUFF;
        this.skillType = SkillType.SKILL_TYPE_PASSIVE;

        this.stats.isInfinity = true;
        this.stats.canCleanBySkill = false;

        owner.receiveSkill(this.clone());
    }

    clone() {
        const skillClone = new BuffPassiveHero();
        this.transferData(skillClone, this);
        return skillClone;
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                breal;
        }
    }

    initSkill() {
        super.initSkill();
        this.enemy.currentBuff.addBuff = TypeBuffControl.TYPE_BUFF_CONTROL_PASSIVE_HERO;
        this.checkLevelSkill();
    }
};

module.exports = BuffPassiveHero;