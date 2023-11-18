const Skill2 = require('../../Skill/Skill2.js');
const AtkTypes = require('../../Enum/AtkTypes.js');


class zoroKidSkill2 extends Skill2 {
    initSkillOwner(owner) {
        const debuff = new zoroKidSkill2Debuff();

        this.stats.name = "zorokid_skill_2";
        this.stats.numberTarget = 3;
        this.stats.atkType = AtkTypes.ATTACK_TYPE_NONE;
        this.stats.percentAtkToDamage = 111;
        this.stats.percentApply = 35;

        super.initSkillOwner(owner);
        debuff.initSkillOwner(owner);
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 133;
                break;
            case 3:
                this.stats.percentAtkToDamage = 160;
                this.stats.percentApply = 50;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
        this.addEffectToEnemy(this.debuff);
    }
}

module.exports = zoroKidSkill2;