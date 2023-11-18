const Hero = require("../../../Hero/Hero.js");
const SkillNormalAttack = require('../../../Skill/SkillNormalAttack.js');
const cuuThuongSkill1 = require('../cuuThuongSkill1.js');
const cuuThuongSkill2 = require('../cuuThuongSkill2.js');
const cuuThuongSkill3Buff = require('../cuuThuongSkill3Buff.js');

class HeroCuuThuong extends Hero {
    init() {
        this.data.id = 3;
        super.init();

        const normal = new SkillNormalAttack();
        normal.initSkillOwner(this);
        this.skills.push(normal);

        const skill1 = new cuuThuongSkill1();
        skill1.initSkillOwner(this);
        this.skills.push(skill1);

        const skill2 = new cuuThuongSkill2();
        skill2.initSkillOwner(this);
        this.skills.push(skill2);

        const skill3 = new cuuThuongSkill3Buff();
        skill3.initSkillOwner(this);
        this.skills.push(skill3);
    }
}

module.exports = HeroCuuThuong;
