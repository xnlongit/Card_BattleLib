const Skill1 = require('../../Skill/Skill1.js');
const AtkTypes = require('../../Enum/AtkTypes.js');

class nicorobinSkill1 extends Skill1 {
    initSkillOwner(owner) {
        this.debuff = new NicorobinSkill1Debuff(owner);

        this.stats.name = " nicorobin_skill_1";
        this.stats.atkType = AtkTypes.ATTACK_TYPE_NONE;
        this.stats.numberTarget = 1;
        this.stats.percentAtkToDamage = 140;

        super.initSkillOwner(owner);
        this.debuff.initSkillOwner(owner);
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 168;
                break;
            case 3:
                this.stats.percentAtkToDamage = 200;
                this.buffSkill.penentration += 15;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
        this.addEffectToEnemy(this.debuff);
    }
}

module.exports = nicorobinSkill1;