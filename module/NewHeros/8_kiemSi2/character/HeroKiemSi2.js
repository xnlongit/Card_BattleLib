const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const kiemSi2Skill1 = require('../kiemSi2Skill1.js');
const kiemSi2Skill2Buff = require('../kiemSi2Skill2Buff.js');


class HeroKiemSi2 extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new kiemSi2Skill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new kiemSi2Skill2Buff();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);
    }
}

module.exports = HeroKiemSi2;
