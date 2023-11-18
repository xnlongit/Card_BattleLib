const ShipType = require('../Enum/ShipType.js');
const Skill = require('./skill.js');

class skillShip extends Skill {
    constructor() {
        this.shipPosition = null;
        this.currentStack = 0;
        this.maxStack = 20;
        this.shipOwner = null;
    }

    initSkill(owner) {
        this.shipOwner = owner;
    }

    skillActive() {
        super.skillActive();
        this.currentStack = 0;
        console.log(this.shipOwner.team + " Active Ship Skill " + this.shipPosition + " in node " + this.shipOwner.cardBattleLib);
    }

    stackInOrder() {
        if (canActiveSkill) {
            this.addSkillWaitList();
        } else {
            this.currentStack++;
        }
    }

    addSkillWaitList() {
        super.addSkillWaitList();
        this.shipOwner.cardBattleLib.skillWaitActive.push(this);
    }

    canActiveSkill() {
        if (this.shipOwner.cardBattleLib.skillWaitActive.includes(this)) {
            return false;
        }
        return this.currentStack >= this.maxStack;
    }

}

module.exports = skillShip;
