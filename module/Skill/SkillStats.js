const BuffType = require('../Enum/BuffType.js');
const AtkType = require('../Enum/AtkTypes.js')

class SkillStats {
    constructor(data) {
        this.baseSkillId = data != null ? data.baseSkillId : null;
        this.name = data != null ? data.name : null;
        this.level = data != null ? data.level : 1;
        this.percentAtkToDamage = data != null ? data.percentAtkToDamage : 100;
        this.atkType = data != null ? data.atkType : [];
        this.numberTarget = data != null ? data.numberTarget : 1;
        this.percentAtkToBuff = data != null ? data.percentAtkToBuff : 100;
        this.buffType = data != null ? data.buffType : [];
        this.lifeTurn = data != null ? data.lifeTurn : 1;
        this.isInfinity = data != null ? data.isInfinity : false;
        this.percentApply = data != null ? data.percentApply : 100;
        this.percentBuff = data != null ? data.percentBuff : 0;
        this.canCleanBySkill = data != null ? data.canCleanBySkill : true;
    }

    clone() {
        let skillStats = new SkillStats({});
        skillStats.name = this.name;
        skillStats.level = this.level;
        skillStats.percentAtkToDamage = this.percentAtkToDamage;
        skillStats.atkType = this.atkType;
        skillStats.numberTarget = this.numberTarget;
        skillStats.percentAtkToBuff = this.percentAtkToBuff;
        skillStats.buffType = this.buffType;
        skillStats.lifeTurn = this.lifeTurn;
        skillStats.isInfinity = this.isInfinity;
        skillStats.percentApply = this.percentApply;
        skillStats.percentBuff = this.percentBuff;
        skillStats.canCleanBySkill = this.canCleanBySkill;
        return skillStats;
    }
}

module.exports = SkillStats;