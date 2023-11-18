const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const nicorobinSkill1 = require('../nicorobinSkill1.js');
const nicorobinSkill2 = require('../nicorobinSkill2.js');
const nicorobinSkill3Buff = require('../nicorobinSkill3Buff.js');

class HeroNicorobin extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new nicorobinSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new nicorobinSkill2();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);

        const skill3 = new nicorobinSkill3Buff();
        skill3.initSkillOwner(this);
        this.skills.push(skill3);
    }
}

module.exports = HeroNicorobin;
