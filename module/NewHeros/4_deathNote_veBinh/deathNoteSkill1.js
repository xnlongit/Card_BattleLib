const Skill = require('../../Skill/skill.js');
const SlotSkill = require('../../Enum/SlotSkill.js');
const SkillType = require('../../Enum/SkillType.js');
const AtkType = require('../../Enum/AtkTypes.js');
const deathNoteSkill1Buff = require('./deathNoteSkill1Buff.js');

class deathNoteSkill1 extends Skill {
    constructor(owner) {
        super(owner);
        this.buff = new deathNoteSkill1Buff();
    }

    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.order = SlotSkill.SKILL_SLOT_2;
        this.skillType = SkillType.SKILL_TYPE_POWER_FULL;

        this.stats.name = "death_note_skill_1";
        this.stats.numberTarget = 3;
        this.stats.atkType = AtkType.ATTACK_TYPE_NONE;
        this.stats.percentAtkToDamage = 124;
        this.buff.initSkillOwner(this.owner);
    }

    skillActive() {
        super.skillActive();
        this.dealDamageHeros();
        this.buff.skillActive();
    }
}

module.exports = deathNoteSkill1; 