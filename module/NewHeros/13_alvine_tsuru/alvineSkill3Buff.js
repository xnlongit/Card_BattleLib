const Skill = require("../../Skill/skill.js");
const SkillPriority = require('../../Enum/SkillPriority.js');
const SkillType = require('../../Enum/SkillType.js');


class alvineSkill3Buff extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.skillPriority = SkillPriority.SKILL_PRIORITY_BUFF;
        this.skillType = SkillType.SKILL_TYPE_PASSIVE;

        this.stats.name = "alvine_skill_3_buff";
        this.stats.isInfinity = true;
        this.stats.canCleanBySkill = false;

        owner.receiveSkill(this.clone());
    }

    clone() {
        const skillClone = new alvineSkill3Buff(this.initData);
        this.transferData(this, skillClone);
        return skillClone;
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 1:
                this.owner.buff.atk += 10;
                this.owner.buff.health += 5;
                this.owner.caculateStats();
                break;
            case 2:
                this.owner.buff.atk += 20;
                this.owner.buff.health += 10;
                this.owner.caculateStats();
                break;
            case 3:
                this.owner.buff.atk += 30;
                this.owner.buff.health += 15;
                this.owner.buff.hitRate += 10;
                this.owner.caculateStats();
                break;
        }
    }

    initSkill() {
        super.initSkill();
        this.checkLevelSkill();
    }
}

module.exports = alvineSkill3Buff;