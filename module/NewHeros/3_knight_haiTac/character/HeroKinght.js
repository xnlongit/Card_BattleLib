const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const knightSkill1 = require('../knightSkill1.js');
const knightSkill2Buff = require('../knightSkill2Buff.js');


class HeroKnight extends Hero {
    init() {
        this.data.id = 2;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new knightSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new knightSkill2Buff();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);
    }
}

module.exports = HeroKnight;