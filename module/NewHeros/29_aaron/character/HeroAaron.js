const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const aaronSkill1 = require('../aaronSkill1.js');
const aatonSkill2 = require('../aaronSkill2.js');


class HeroAaron extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new aaronSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new aatonSkill2();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);
    }
}

module.exports = HeroAaron;