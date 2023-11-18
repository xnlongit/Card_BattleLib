const Skill = require("../../Skill/skill.js");
const SkillPriority = require('../../Enum/SkillPriority.js');
const SkillType = require('../../Enum/SkillType.js');



class liuKangSkill3Buff extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.skillPriority = SkillPriority.SKILL_PRIORITY_BUFF;
        this.skillType = SkillType.SKILL_TYPE_PASSIVE;

        this.stats.name = "liukang_skill_3_buff";
        this.stats.isInfinity = true;
        this.stats.canCleanBySkill = false;

        owner.receiveSkill(this.clone());
    }

    clone() {
        const skillClone = new liuKangSkill3Buff();
        this.transferData(skillClone, this);
        return skillClone;
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 1:
                this.owner.buff.atk += 10;
                this.owner.buff.health += 5;
                break;
            case 2:
                this.owner.buff.atk += 20;
                this.owner.buff.health += 10;
                break;
            case 3:
                this.owner.buff.atk += 30;
                this.owner.buff.health += 15;
                this.owner.buff.critChance += 15;
                break;
        }
    }

    initSkill() {
        super.initSkill();
        this.checkLevelSkill();
    }
}

module.exports = liuKangSkill3Buff;