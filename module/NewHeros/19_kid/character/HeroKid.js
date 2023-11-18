const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const kidSkill1 = require('../kidSkill1.js');
const kidSkill2 = require('../kidSkill2.js');
const kidSkill3Buff = require('../kidSkill3Buff.js');

class HeroKid extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new kidSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new kidSkill2();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);

        const skill3 = new kidSkill3Buff();
        skill3.initSkillOwner(this);
        this.skills.push(skill3);
    }
}

module.exports = HeroKid;
