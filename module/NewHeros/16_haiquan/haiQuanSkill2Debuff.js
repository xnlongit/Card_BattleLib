const Stun = require('../../Skill/SkillParent/EffecDebuff/Stun.js');


class haiQuanSkill2Debuff extends Stun {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.stats.name = "hai_quan_skill_2_debuff";
    }
}

module.exports = haiQuanSkill2Debuff;