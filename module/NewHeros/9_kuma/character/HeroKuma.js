const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const kumaSkill1 = require('../kumaSkill1.js');
const kumaSkill2 = require('../kumaSkill2.js');
const kumaSkill3buff = require('../kumaSkill3Buff.js')

class HeroKuma extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new kumaSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new kumaSkill2();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);

        const skill3 = new kumaSkill3buff();
        skill3.initSkillOwner(this);
        this.skills.push(skill3);
    }
}

module.exports = HeroKuma;
