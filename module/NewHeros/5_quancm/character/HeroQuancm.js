const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const quancmSkill1 = require('../quancmSkill1.js');
const quancmSkill2Buff = require('../quancmSkill2buff.js');


class HeroQuancm extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new quancmSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new quancmSkill2Buff();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);
    }
}

module.exports = HeroQuancm;