const shipType = require('../Enum/ShipType.js');

class ship{

    constructor(battleLib) {
        this.team = 0;;
        this.currentStack = 0;
        this.type = shipType.SHIP_TYPE_NONE;
        this.skills = [];
        this.cardBattleLib = battleLib;
    }

    init() {
    }

    stack() {
        let skillFind = this.currentSkill();
        if(skillFind != null) skillFind.stackInOrder();
    }

    currentSkill() {
        return this.skills.find(e => e.shipPosition == this.type);
    }

};

module.exports = ship;