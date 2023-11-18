const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const peronaSkill1 = require('../peronaSkill1.js');
const peronaSkill2 = require('../peronaSkill2.js');
const perronaSkill3Buff = require('../peronaSkill3Buff.js');

class HeroPerona extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new peronaSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new peronaSkill2();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);

        const skill3 = new perronaSkill3Buff();
        skill3.initSkillOwner(this);
        this.skills.push(skill3);
    }
}

module.exports = HeroPerona;
