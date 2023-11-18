const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const xaThuSkill1 = require('../xaThuSkill1.js');
const xaThuSkill2Buff = require('../xaThuSkill2Buff.js');


class HeroXaThu extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new xaThuSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new xaThuSkill2Buff();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);
    }
}

module.exports = HeroXaThu;