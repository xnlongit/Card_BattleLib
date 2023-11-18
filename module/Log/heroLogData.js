const pointPower = require('../Enum/pointPower.js');

class HeroLogData {
    constructor() {
        this.isDead = false;
        this.isAttack = false;
        this.teamType = 0;
        this.positionInTeam = 0;
        this.id = 0;
        this.baseHeroId = 0;
        this.maxHealth = 0;
        this.currentHealth = 0;
        this.maxFury = 0;
        this.currentFury = 0;
        this.skillRecives = [];
        this.listBuff = [];
        this.listCC = [];
        this.damageTaken = 0;
        this.isCrit = false;
        this.isDodge = false;
        this.heal = 0;
    }

    initialize(isAttack, id, maxHealth, currentHealth, skillRecives, damageTaken = 0, isCrit = false, heal = 0) {
        this.isDead = false;
        this.isAttack = isAttack;
        this.id = id;
        this.maxHealth = maxHealth;
        this.currentHealth = currentHealth;
        this.skillRecives = skillRecives;
        this.damageTaken = damageTaken;
        this.heal = heal;
        this.isCrit = isCrit;
    }

    setLog(hero) {
        this.isDead = hero.currentHealth.isOverHealth;
        this.isAttack = false;
        this.teamType = hero.data.teamType;
        this.positionInTeam = hero.data.positionInTeam;
        this.id = hero.data.id;
        this.baseHeroId = hero.data.baseHeroId;
        this.maxHealth = hero.currentHealth.max;
        this.currentHealth = hero.currentHealth.current;
        this.maxFury = pointPower.POINT_POWER_MAX;
        this.currentFury = hero.data.power;
        for(let i = 0; i < hero.receives.length; i ++){
            let s = hero.receives[i];
            this.skillRecives.push(s.stats.name);
        }

        this.listBuff = hero.currentBuff.currentAllBuff();
        this.listCC = hero.currentStatus.currentAllStun();
    }
}

module.exports = HeroLogData;