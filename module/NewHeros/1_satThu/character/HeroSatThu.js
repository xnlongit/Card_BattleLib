const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const satThuSkill1 = require('../satThuSkill1.js');
const satThuSkill2Buff = require('../satThuSkill2Buff.js');

class HeroSatThu extends Hero {
    init() {
        super.init();
        this.data.id = 3;

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new satThuSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new satThuSkill2Buff();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);
    }
}

module.exports = HeroSatThu;