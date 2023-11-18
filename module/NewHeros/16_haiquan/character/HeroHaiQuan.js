const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const haiQuanSkill1 = require('../haiQuanSkill1.js');
const haiQuanSkill2 = require('../haiQuanSkill2.js');
const haiQuanSkill3Buff = require('../haiQuanSkill3Buff.js');

class HeroHaiQuan extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new haiQuanSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new haiQuanSkill2();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);

        const skill3 = new haiQuanSkill3Buff();
        skill3.initSkillOwner(this);
        this.skills.push(skill3);
    }
}

module.exports = HeroHaiQuan;
