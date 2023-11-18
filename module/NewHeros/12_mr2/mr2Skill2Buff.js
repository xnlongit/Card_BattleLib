const Freeze = require("../../Skill/SkillParent/EffecDebuff/Freeze.js");



class mr2Skill2Buff extends Freeze {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.stats.name = "mr2_skill_2_debuff";
        this.stats.lifeTurn = 2;
    }
}

module.exports = mr2Skill2Buff;