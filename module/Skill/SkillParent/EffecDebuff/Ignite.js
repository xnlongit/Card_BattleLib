const SkillDebuff = require('../../skillDebuff.js');
const SkillPriority = require('../../../Enum/SkillPriority.js');
const TypeCrowdControl = require('../../../Enum/TypeCrowdControl.js');

class Ignite extends SkillDebuff  {
    constructor(data) {
        super(data);
        this.stack = 1;
        this.on("UpdateEndTurn", this.updateEndTurn.bind(this));
    }
    initSkillOwner(hero) {
        super.initSkillOwner(hero);
        this.skillPriority = SkillPriority.SKILL_PRIORITY_DEBUFF;
        this.listDebuff.push(TypeCrowdControl.TYPE_CROWD_CONTROL_IGNITE);
        this.stats.name = (this.stats.name != null ? this.stats.name : "") + "_" + TypeCrowdControl.TYPE_CROWL_CONTROL_IGNITE;
    }

    clone() {
        let skillClone = new Ignite(this.initData);
        this.transferData(this, skillClone);
        return skillClone;
    }

    initSkill() {
        super.initSkill()
        console.log("Ignite:initSkilll-" + this.stats.name + ">Call=====================================>this.enemy.cardBattleLib.attachEndTurn");
        this.enemy.cardBattleLib.attachEndTurn(this);
        this.enemy.currentStatus.addCrowdControl(TypeCrowdControl.TYPE_CROWL_CONTROL_IGNITE);
        console.log("Ingite target: " + this.enemy.data.teamType + this.enemy.data.positionInTeam + " Owner: " + this.owner.data.teamType + this.owner.data.positionInTeam);
    }

    recoverSkill() {
        super.recoverSkill();
        console.log("Ignite:recoverSkill-" + this.stats.name + ">Call=====================================>this.enemy.cardBattleLib.detachEndTurn");
        this.enemy.cardBattleLib.detachEndTurn(this);
        this.enemy.currentStatus.removeCrowdControl(TypeCrowdControl.TYPE_CROWL_CONTROL_IGNITE);
    }

    resetLifeTurn() {
        super.resetLifeTurn();
        this.stack++;
    }

    updateEndTurn() {
        console.log("Ignite:updateEndTurn-" + this.stats.name + ">Call=====================================>updateEndTurn");
        this.processSkill();
    }

    processSkill() {
        super.processSkill();
        console.log("Ingite deal damage: " + this.enemy.data.teamType + " - " + this.enemy.data.positionInTeam);
        this.dealDamage(this.stats.percentAtkToDamage * this.stack, this.enemy);
    }
}

module.exports = Ignite;