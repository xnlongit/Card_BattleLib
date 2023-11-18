const Skill1 = require("../../Skill/Skill1.js");
const AtkTypes = require('../../Enum/AtkTypes.js');



class peronaSkill1 extends Skill1 {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.stats.name = "perona_skill_1";
        this.stats.atkType = AtkTypes.ATTACK_TYPE_ALL_BACK;
        this.stats.numberTarget = 1;
        this.stats.percentAtkToDamage = 159;
        this.buffSkill.penentration = 20;
    }

    checkLevelSkill() {
        switch (this.stats.level) {
            case 2:
                this.stats.percentAtkToDamage = 190;
                break;
            case 3:
                this.stats.percentAtkToDamage = 228;
                this.buffSkill.lifeSteal += 30;
                break;
        }
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
    }
}

 module.exports = peronaSkill1;