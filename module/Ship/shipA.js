const SkillShip = require('../Skill/SkillShip.js');
const ShipType = require('../Enum/ShipType.js');
const ship = require("./ship");
const skillShip = require('../Skill/SkillShip.js');

class shipA extends ship {
    int() {
        super.int();
        const skill = new SkillShip();
        this.skill.stats.name = "ship_attack";
        this.skill.shipPosition = ShipType.SHIP_TYPE_ATTACK;
        this.skill.initSkill(this);
        this.skills.push(this.skill);

        const skill2 = new SkillShip();
        skill2.stats.name ="ship_defense";
        skill2.shipPosition = ShipType.SHIP_TYPE_DEFENSE;
        skill2.initSkill(this);
        this.skills.push(skill2);
    }
}

module.exports = shipA;