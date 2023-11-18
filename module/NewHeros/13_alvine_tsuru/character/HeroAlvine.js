const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const alvineSkill1 = require('../alvineSkill1.js');
const alvineSkill2 = require('../alvineSkill2.js');
const alvineSkill3Buff = require('../alvineSkill3Buff.js');

class HeroAlvine extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new alvineSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new alvineSkill2();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);

        const skill3 = new alvineSkill3Buff();
        skill3.initSkillOwner(this);
        this.skills.push(skill3);
    }
}

module.exports = HeroAlvine;
