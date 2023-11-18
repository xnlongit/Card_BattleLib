const Skill = require('../../Skill/skill.js');
const SkillPriority = require('../../Enum/SkillPriority.js');
const SkillType = require('../../Enum/SkillType.js');

// class satThuSkill2Buff extends Skill {

//     initSkill(owner) {
//         super.initSkill(owner);
//         this.skillPriority = SkillPriority.SKILL_PRIORITY_BUFF;
//         this.skillType = SkillType.SKILL_TYPE_PASSIVE;

//         this.stats.name = 'sat_thu_skill_2_buff';
//         this.stats.isInfinity = true;
//         this.stats.canCleanBySkill = false;
//         owner.ReceiveSkill(this.clone());
//     }

//     initSkill() {
//         super.initSkill();
//         // this.owner.buff.atk += 10;
//         // this.owner.buff.health += 5;
//         this.owner.caculateStats();
//     }

//     recoverSkill() {
//         // this.owner.buff.atk -= 10;
//         // this.owner.buff.health -= 5;
//         this.owner.caculateStats();
//         super.recoverSkill();
//     }
// }

// module.exports = satThuSkill2Buff;

// tự buff cho bản thân
class satThuSkill2Buff extends Skill{

    initSkillOwner(owner) {
        super.initSkillOwner(owner);

        this.skillPriority = SkillPriority.SKILL_PRIORITY_BUFF;
        this.skillType = SkillType.SKILL_TYPE_PASSIVE;
        this.stats.name = "sat_thu_skill_2_buff";
        this.stats.isInfinity = true;
        this.stats.canCleanBySkill = false;

        this.owner.receiveSkill(this.clone());
    }

    initSkill() {
        super.initSkill();
        this.owner.buff.atk += 10;
        this.owner.buff.health += 5;
        this.owner.caculateStats();
    }

    recoverSkill() {
        this.owner.buff.atk -= 10;
        this.owner.buff.health -= 5;
        this.owner.caculateStats();
        super.recoverSkill();
    }

    clone(){
        let skillClone = new SatThuSkill2Buff(this.initData);
        this.transFerData(this, skillClone);
        return skillClone;
    }
};

module.exports = satThuSkill2Buff;