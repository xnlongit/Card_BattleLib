const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const liuKangSkill1 = require('../liuKangSkill1.js');
const liuKangSkill2 = require('../liuKangSkill2.js');
const LiuKangSkill3Buff = require('../liuKangSkill3Buff.js');

class HeroDoiTruong extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new liuKangSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new liuKangSkill2();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);

        const skill3 = new LiuKangSkill3Buff();
        skill3.initSkillOwner(this);
        this.skills.push(skill3);
    }
}

module.exports = HeroDoiTruong;
