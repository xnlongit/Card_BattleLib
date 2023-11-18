const Skill = require("../../Skill/skill.js");
const BuffPassiveHero = require('../../Skill/SkillParent/EffecBuff/BuffPassiveHero.js');



class peronaSkill3Buff extends BuffPassiveHero {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.stats.name = "nicorobin_skill_3_buff";
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
}

module.exports = peronaSkill3Buff;