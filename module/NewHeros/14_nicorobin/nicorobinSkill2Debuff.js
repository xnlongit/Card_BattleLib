const Silent = require('../../Skill/SkillParent/EffecDebuff/Silent.js');

class nicorobinSkill2Debuff extends Silent {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.stats.name = "nicorobin_skill_2_debuff";
        this.stats.lifeTurn = 2;
    }
}

module.exports = nicorobinSkill2Debuff;