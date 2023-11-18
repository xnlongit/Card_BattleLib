const Ignite = require("../../Skill/SkillParent/EffecDebuff/Ignite.js");

class aaronSkill1Debuff extends Ignite {
    initSkill(owner) {
        super.initSkill(owner);

        this.stats.name = "aaron_skill_1_debuff";
        this.stats.percentAtkToDamage = 15;
        this.stats.lifeTurn = 2;
    }
}

module.exports = aaronSkill1Debuff;