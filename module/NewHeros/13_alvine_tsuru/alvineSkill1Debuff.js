const Skill = require('../../Skill/skill.js');
const Role = require('../../Enum/Role.js');


class alvineSkill1Debuff extends Skill {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.stats.name = "alvine_skill_1_debuff";
        this.stats.percentBuff = 15;
        this.stats.lifeTurn = 2;
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 3:
                if (this.enemy.data.role == Role.HERO_ROLE_ATTACK) {
                    this.stats.percentBuff = 25;
                }
                break;
        }
    }

    clone() {
        const skillClone = new alvineSkill1Debuff();
        this.transferData(skillClone, this);
        return skillClone;
    }

    initSkill() {
        super.initSkill();
        this.checkLevelSkill();
        this.enemy.buff.hitRate += this.stats.percentBuff;
    }

    recoverSkill() {
        this.enemy.buff.hitRate -= this.stats.percentBuff;
        super.recoverSkill();
    }
}

module.exports = alvineSkill1Debuff;