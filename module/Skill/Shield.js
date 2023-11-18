const Skill = require("./skill.js");



class Shield extends Skill {
    constructor() {
        this.healthShield = 0;
        this.currentLifeTurn = 0;
    }

    effectSkill(damageData) {
        if (this.healthShield > 0) {
            damageData.damage -= this.healthShield;
            if (damageData.damage <= 0) {
                damageData.damage = 0;
            }
        }
        if (this.healthShield <= 0) {
            this.recoverSkill();
        }
        return damageData;
    }

    processSkill() {
        if (this.healthShield <= 0) {
            this.recoverSkill();
        }
    }

    skillActive(shield) {
        this.healthShield = shield;
    }

    clone() {
        const skillClone = new Shield();
        this.transferData(skillClone, this);
        skillClone.healthShield = this.healthShield;
        return skillClone;
    }

    recoverSkill() {
        super.recoverSkill();
        this.currentLifeTurn = 0;
    }
}

module.exports = Shield;