const Stun = require('../../Skill/SkillParent/EffecDebuff/Stun.js');


class kidSkill1Debuff extends Stun {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.stats.name = "kid_skill_2_debuff";
    }
}

module.exports = kidSkill1Debuff;