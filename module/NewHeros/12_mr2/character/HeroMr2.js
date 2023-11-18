const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const mr2Skill1 = require('../mr2Skill1.js');
const mr2Skill2 = require('../mr2Skill2.js');
const mr2Skill3Buff = require('../mr2Skill3Buff.js');

class HeroMr2 extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new mr2Skill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new mr2Skill2();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);

        const skill3 = new mr2Skill3Buff();
        skill3.initSkillOwner(this);
        this.skills.push(skill3);
    }
}

module.exports = HeroMr2;
