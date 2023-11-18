const Stun = require("../../Skill/SkillParent/EffecDebuff/Stun.js");

class alvineSkill2Debuff extends Stun {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.stats.name = "alvine_skill_2_debuff";
    }
}

module.exports = alvineSkill2Debuff;