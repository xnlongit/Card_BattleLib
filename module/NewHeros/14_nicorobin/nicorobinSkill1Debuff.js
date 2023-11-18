const Blind = require('../../Skill/SkillParent/EffecDebuff/Blind.js');


class nicorobinSkill1Debuff extends Blind {
    initSkillOwner(owner){
        super.initSkillOwner(owner);
        this.stats.name ="nicorobin_skill_2_debuff";
        this.stats.percentBuff = 15;
        this.stats.lifeTurn = 2;
    }
}

module.exports = nicorobinSkill1Debuff;