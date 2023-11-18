const BuffPassiveHero = require('../../Skill/SkillParent/EffecBuff/BuffPassiveHero.js');

class kidSkill3Buff extends BuffPassiveHero {
    initSkillOwner(owner) {
        this.stats.name = "kid_skill_3_buff";
        super.initSkillOwner(owner);
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
                this.owner.buff.endDamage += 10;
                break;
        }
    }
}

module.exports = kidSkill3Buff;