const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const zorokidSkill1 = require('../zoroKidSkill1.js');
const zorokidSkill2 = require('../zoroKidSkill2.js');
const zorokidSkill3Buff = require('../zoroKidSkill3Buff.js');

class HeroZoroKid extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new zorokidSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new zorokidSkill2();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);

        const skill3 = new zorokidSkill3Buff();
        skill3.initSkillOwner(this);
        this.skills.push(skill3);
    }
}

module.exports = HeroZoroKid;
