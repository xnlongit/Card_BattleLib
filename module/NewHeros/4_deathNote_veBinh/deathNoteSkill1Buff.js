const Skill = require("../../Skill/skill");
const BuffAtk = require('../../Skill/SkillParent/EffecBuff/BuffAtk.js');

class deathNoteSkill1Buff extends BuffAtk {
    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.stats.name = "death_note_skill_1_buff";
        this.stats.percentBuff = 10;
        this.stats.lifeTurn = 2;
    }

    skillActive() {
        super.skillActive();
        this.owner.receiveSkill(this.clone());
    }
}

module.exports = deathNoteSkill1Buff;