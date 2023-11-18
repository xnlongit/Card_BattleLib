const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const kakuSkill1 = require('../kakuSkill1.js');
const kakuSkill2Buff = require('../kakuSkill2Buff.js');


class HeroKaku extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new kakuSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new kakuSkill2Buff();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);
    }
}

module.exports = HeroKaku;