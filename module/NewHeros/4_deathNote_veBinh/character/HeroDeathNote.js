const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const deathNoteSkill1 = require('../deathNoteSkill1.js');
const deathNoteSkill2Buff = require('../deathNoteSkill2Buff.js');
const deathNoteSkill1Buff = require('../deathNoteSkill1Buff.js');

class HeroDeathNote extends Hero {
    init() {
        this.data.id = 1;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new deathNoteSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new deathNoteSkill2Buff();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);

        const skill3 = new deathNoteSkill1Buff();
        skill3.initSkillOwner(this);
        this.skills.push(skill3);
    }
}

module.exports = HeroDeathNote;