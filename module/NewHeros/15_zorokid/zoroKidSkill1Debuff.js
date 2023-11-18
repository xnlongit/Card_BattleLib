const BreakDef = require('../../Skill/SkillParent/EffecDebuff/BreakDef.js');


class zoroKidSkill1Debuff extends BreakDef {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.stats.name = "zorokid_skill_1_debuff";
        this.stats.percentBuff = 10;
        this.stats.lifeTurn = 2;
    }
}

module.exports = zoroKidSkill1Debuff;