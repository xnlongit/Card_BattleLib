const Skill = require('../Skill/skill.js');
const SkillPriority = require('../Enum/SkillPriority.js');

class SkillDebuff extends Skill{

    // 25 chỉ số tương ứng 25 chỉ số buff của class BuffStats
    constructor(data) {
        super(data);
        this.listDebuff = [];
    }
    initSkillOwner(owner) {
        super.initSkillOwner(owner);
        this.skillPriority = SkillPriority.SKILL_PRIORITY_DEBUFF;
        // Stats.Name = "buff_che_do";
    }

    isSkillHaveCc(cc) {
        return this.listDebuff.find(e => e === cc);
    }

    initSkill() {
        super.initSkill();
        for(let i = 0; i < this.listDebuff.length; i ++){
            let item = this.listDebuff[i];
            this.enemy.currentStatus.addCrowlControll(item);
        }
    }

    recoverSkill() {
        super.recoverSkill();
        for(let i = 0; i < this.listDebuff.length; i ++){
            let item = this.listDebuff[i];
            this.enemy.currentStatus.removeCrowlControl(item);
        }
    }

}

module.exports = SkillDebuff;