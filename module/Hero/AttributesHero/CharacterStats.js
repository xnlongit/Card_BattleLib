const AbilityCharacterStats = require('../../Enum/AbilityCharacterStats.js');
const utility = require('../../Common/utility.js');
const points = [
    100,  // HP
    120,  // ATK
    80,   // DEF
    150,  // SPEED
    40,   // VIOLENCE_RATE
    200,  // DAMAGE_VIOLENCE
    0,    // DEF_VIOLENCE
    0,    // IGNORE_DAMAGE_VIOLENCE
    20,   // IGNORE_DEF
    0,    // IGNORE_DAMAGE_MAGIC
    100,  // HIT_RATE
    10,   // DODGE_RATE
    50,   // INCR_THERAPY
    30,   // INCR_RECEIVE_THERAPY
    5,    // BLOOD_SUCKING_RATE
    20,   // HIT_EFFECT
    15,   // DECR_EFFECT
    10,   // SELF_DEF
    10,   // INCR_DAMAGE_PHYS
    10,   // INCR_DAMAGE_MAGIC
    5,    // DECR_INJURY
    5     // DAMAGE_FINAL
];


const CharacterStats = function () {
    this.power = 25;
    this.health = points[AbilityCharacterStats.ABILITY_HP - 1];
    this.atk = points[AbilityCharacterStats.ABILITY_ATK - 1];
    this.def = points[AbilityCharacterStats.ABILITY_DEF - 1];
    this.speed = points[AbilityCharacterStats.ABILITY_SPEED - 1];

    //
    this.critChance = points[AbilityCharacterStats.ABILITY_VIOLENCE_RATE - 1];
    this.critDamage = points[AbilityCharacterStats.ABILITY_DAMAGE_VIOLENCE - 1];
    this.critResistance = points[AbilityCharacterStats.ABILITY_DEF_VIOLENCE - 1];
    this.critDamageReduce = points[AbilityCharacterStats.ABILITY_IGNORE_DAMAGE_VIOLENCE - 1];

    // Def Index
    this.damageReduce = 0;
    this.penentration = points[AbilityCharacterStats.ABILITY_IGNORE_DEF - 1];
    this.physicReduce = points[AbilityCharacterStats.ABILITY_SELF_DEF - 1];
    this.magicReduce = points[AbilityCharacterStats.ABILITY_IGNORE_DAMAGE_MAGIC - 1];

    // Action index
    this.hitRate = points[AbilityCharacterStats.ABILITY_HIT_RATE - 1];
    this.dodgeRate = points[AbilityCharacterStats.ABILITY_DODGE_RATE - 1];

    // Health index
    this.healingBonus = points[AbilityCharacterStats.ABILITY_INCR_THERAPY - 1];
    this.healingRecieveBonus = points[AbilityCharacterStats.ABILITY_INCR_RECEIVE_THERAPY - 1];
    this.lifeSteal = points[AbilityCharacterStats.ABILITY_BLOOD_SUCKING_RATE - 1];

    // Stun index
    this.effectIncrease = points[AbilityCharacterStats.ABILITY_HIT_EFFECT - 1];
    this.effectDecrease = points[AbilityCharacterStats.ABILITY_DECR_EFFECT - 1];

    // Damage index
    this.skillBonus = points[AbilityCharacterStats.ABILITY_DAMAGE_SKILL - 1];
    this.physicBonus = points[AbilityCharacterStats.ABILITY_INCR_DAMAGE_PHYS - 1];
    this.magicBonus = points[AbilityCharacterStats.ABILITY_INCR_DAMAGE_MAGIC - 1];

    // Specially index
    this.lastBreath = points[AbilityCharacterStats.ABILITY_DECR_INJURY - 1];
    this.endDamage = points[AbilityCharacterStats.ABILITY_DAMAGE_FINAL - 1];
}

module.exports = CharacterStats;

CharacterStats.prototype.initialize = function (power, health, atk, def, speed, crit = 0, critDamage = 200) {
    const self = this;
    self.power = power;
    self.health = health;
    self.atk = atk;
    self.def = def;
    self.speed = speed;

    self.critChance = crit;
    self.critDamage = critDamage;
}

CharacterStats.prototype.initializeFull = function (power, health, atk, def, speed, critChance, critDamage, critResistance, critDamageReduce, damageReduce, penentration, physicReduce, magicReduce, hitRate, dodgeRate, healingBonus, healingRecieveBonus, lifeSteal, effectIncrease, effectDecrease, skillBonus, physicBonus, magicBonus, lastBreath, endDamage) {
    const self = this;
    self.initialize(power, health, atk, def, speed, critChance, critDamage);

    self.critResistance = critResistance;
    self.critDamageReduce = critDamageReduce;
    self.damageReduce = damageReduce;
    self.penentration = penentration;
    self.physicReduce = physicReduce;
    self.magicReduce = magicReduce;
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
}

CharacterStats.prototype.clone = function () {
    let data = {};
    data.points = utility.initAbilitiesFromArray();
    data.point = 0;
    let stats = new CharacterStats(data);
    stats.initializeFull(this.power, this.health, this.atk, this.def, this.speed, this.critChange, this.critDamage, this.critResistance, this.critDamageReduce, 0, this.penentration, this.physicReduce, this.magicReduce, this.hitRate, this.dodgeRate, this.healingBonus, this.healingRecieveBonus, this.lifeSteal, this.effectIncrease, this.effectDecrease, this.skillBonus, this.physicBonus, this.magicBonus, this.lastBreath, this.endDamage);
    return stats;
}

CharacterStats.prototype.caculateIndex = function (buff, debuff) {
    let cloneStats = this.clone();

    cloneStats.health *= (1 + buff.health - debuff.health);
    cloneStats.atk *= (1 + buff.atk - debuff.atk);
    cloneStats.def *= (1 + buff.def - debuff.def);
    cloneStats.speed *= (1 + buff.speed - debuff.speed);

    cloneStats.critChance *= (1 + buff.critChance - debuff.critChance);
    cloneStats.critDamage *= (1 + buff.critDamage - debuff.critDamage);
    cloneStats.critResistance *= (1 + buff.critResistance - debuff.critResistance);
    cloneStats.critDamageReduce *= (1 + buff.critDamageReduce - debuff.critDamageReduce);

    cloneStats.damageReduce = cloneStats.def / (200 + 100 * 20) + buff.damageReduce - debuff.damageReduce;
    cloneStats.penentration += buff.penentration - debuff.penentration;
    cloneStats.physicReduce += buff.physicReduce - debuff.physicReduce;
    cloneStats.magicReduce += buff.magicReduce - debuff.magicReduce;

    cloneStats.hitRate += buff.hitRate - debuff.hitRate;
    cloneStats.dodgeRate += buff.dodgeRate - debuff.dodgeRate;

    cloneStats.healingBonus += buff.healingBonus - debuff.healingBonus;
    cloneStats.healingRecieveBonus += buff.healingRecieveBonus - debuff.healingRecieveBonus;
    cloneStats.lifeSteal += buff.lifeSteal - debuff.lifeSteal;

    cloneStats.effectIncrease += buff.effectIncrease - debuff.effectIncrease;
    cloneStats.effectDecrease += buff.effectDecrease - debuff.effectDecrease;

    cloneStats.skillBonus += buff.skillBonus - debuff.skillBonus;
    cloneStats.physicBonus += buff.physicBonus - debuff.physicBonus;
    cloneStats.magicBonus += buff.magicBonus - debuff.magicBonus;

    cloneStats.lastBreath += buff.lastBreath - debuff.lastBreath;
    cloneStats.endDamage += buff.endDamage - debuff.endDamage;

    return cloneStats;
}

CharacterStats.prototype.buffPercent = function (points) {
    const self = this;

    this.health += this.health * points[AbilityCharacterStats.ABILITY_HP - 1] / 100;
    this.atk += this.atk * points[AbilityCharacterStats.ABILITY_ATK - 1] / 100;
    this.def += this.def * points[AbilityCharacterStats.ABILITY_DEF - 1] / 100;
    this.speed += this.speed * points[AbilityCharacterStats.ABILITY_SPEED - 1] / 100;

    //Crit index
    this.critChance += this.critChance * points[AbilityCharacterStats.ABILITY_VIOLENCE_RATE - 1] / 100;
    this.critDamage += this.critDamage * points[AbilityCharacterStats.ABILITY_DAMAGE_VIOLENCE - 1] / 100;
    this.critResistance += this.critResistance * points[AbilityCharacterStats.ABILITY_DEF_VIOLENCE - 1] / 100;
    this.critDamageReduce += this.critDamageReduce * points[AbilityCharacterStats.ABILITY_IGNORE_DAMAGE_VIOLENCE - 1] / 100;

    //Def Index
    this.damageReduce = 0;
    this.penentration += this.penentration * points[AbilityCharacterStats.ABILITY_IGNORE_DEF - 1] / 100;
    this.physicReduce += this.physicReduce * points[AbilityCharacterStats.ABILITY_SELF_DEF - 1] / 100;
    this.magicReduce += this.magicReduce * points[AbilityCharacterStats.ABILITY_IGNORE_DAMAGE_MAGIC - 1] / 100;

    //Action Index
    this.hitRate += this.hitRate * points[AbilityCharacterStats.ABILITY_HIT_RATE - 1] / 100;
    this.dodgeRate += this.dodgeRate * points[AbilityCharacterStats.ABILITY_DODGE_RATE - 1] / 100;

    //Heal Index
    this.healingBonus += this.healingBonus * points[AbilityCharacterStats.ABILITY_INCR_THERAPY - 1]
    this.healingRecieveBonus += this.healingRecieveBonus * points[AbilityCharacterStats.ABILITY_INCR_RECEIVE_THERAPY - 1] / 100;
    this.lifeSteal += this.lifeSteal * points[AbilityCharacterStats.ABILITY_BLOOD_SUCKING_RATE - 1] / 100;

    //Stun Index
    this.effectIncrease += this.effectIncrease * points[AbilityCharacterStats.ABILITY_HIT_EFFECT - 1] / 100;
    this.effectDecrease += this.effectDecrease * points[AbilityCharacterStats.ABILITY_DECR_EFFECT - 1] / 100;

    //Damage Index
    this.skillBonus += this.skillBonus * points[AbilityCharacterStats.ABILITY_DAMAGE_SKILL - 1] / 100;
    this.physicBonus += this.physicBonus * points[AbilityCharacterStats.ABILITY_INCR_DAMAGE_PHYS - 1] / 100;
    this.magicBonus += this.magicBonus * points[AbilityCharacterStats.ABILITY_INCR_DAMAGE_MAGIC - 1] / 100;

    //Specially Index
    this.lastBreath += this.lastBreath * points[AbilityCharacterStats.ABILITY_DECR_INJURY - 1] / 100;
    this.endDamage += this.endDamage * points[AbilityCharacterStats.ABILITY_DAMAGE_FINAL - 1] / 100;
}
