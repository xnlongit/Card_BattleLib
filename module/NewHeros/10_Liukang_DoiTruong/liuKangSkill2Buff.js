const Skill = require("../../Skill/skill.js");
const AtkTypes = require('../../Enum/AtkTypes.js');


class liuKangSkill2Buff extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.stats.name = "liukang_skill_2_buff";
        this.stats.atkType = AtkTypes.ATTACK_TYPE_HEALTH_LOWEST;
        this.stats.lifeTurn = 2;
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 3:
                this.stats.numberTarget = 2;
                break;
        }
    }

    skillActive(shield) {
        super.skillActive(shield);
        this.skillAffectHerosAlly();
    }
}

module.exports = liuKangSkill2Buff;