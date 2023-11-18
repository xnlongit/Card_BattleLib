const BuffStats = function (attri) {
    let self = this;
    self.attribute = attri;

    self.health = 0;
    self.atk = 0;
    self.def = 0;
    self.speed = 0;

    self.critChance = 0;
    self.critDamage = 0;
    self.critResistance = 0;
    self.critDamageReduce = 0;

    self.damageReduce = 0;
    self.penentration = 0;
    self.physicReduce = 0;
    self.magicReduce = 0;

    self.hitRate = 0;
    self.dodgeRate = 0;

    self.healingbonus = 0;
    self.healingRecieveBonus = 0;
    self.lifeSteal = 0;

    self.effectIncrease = 0;
    self.effectDecrease = 0;

    self.skillBonus = 0;
    self.physicBonus = 0;
    self.magicBonus = 0;

    self.lastBreath = 0;
    self.endDamage = 0;

    self.damageBonusAll = 0;
}

module.exports = BuffStats;

BuffStats.prototype.initialize = function (health, atk, def, speed, critChance, critDamage, critResistance, critDamageReduce, damageReduce, penentration, physicReduce, magicReduce, hitRate, dodgeRate, healingBonus, healingRecieveBonus, lifeSteal, effectIncrease, effectDecrease, skillBonus, physicBonus, magicBonus, lastBreath, endDamage, damageBonusAll) {
    const self = this;

    self.health = health;
    self.atk = atk;
    self.def = def;
    self.speed = speed;


    self.critChance = critChance;
    self.critDamage = critDamage;
    self.critResistance = critResistance;
    self.critDamageReduce = critDamageReduce;

    self.hitRate = hitRate;
    self.dodgeRate = dodgeRate;

    self.healingBonus = healingBonus;
    self.healingRecieveBonus = healingRecieveBonus;
    self.lifeSteal = lifeSteal;

    self.effectIncrease = effectIncrease;
    self.effectDecrease = effectDecrease;

    self.skillBonus = skillBonus;
    self.physicBonus = physicBonus;
    self.magicBonus = magicBonus;

    self.lastBreath = lastBreath;
    self.endDamage = endDamage;

    self.damageBonusAll = damageBonusAll;
}

BuffStats.prototype.clone = function () {
    let obClone = new BuffStats();
    obClone.initialize(this.health, this.atk, this.def, this.speed, this.critChance, this.critDamage, this.critResistance, this.critDamageReduce, this.damageReduce, this.penentration, this.physicReduce, this.magicReduce, this.hitRate, this.dodgeRate, this.healingBonus, this.healingRecieveBonus, this.lifeSteal, this.effectIncrease, this.effectDecrease, this.skillBonus, this.physicBonus, this.magicBonus, this.lastBreath, this.endDamage, this.damageBonusAll);
    return obClone;
}