const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const kiemSiSkill1 = require('../kiemSiSkill1.js');
const kiemSiSkill2Buff = require('../kiemSiSkill2Buff.js');


class HeroKiemSi extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new kiemSiSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new kiemSiSkill2Buff();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);
    }
}

module.exports = HeroKiemSi;