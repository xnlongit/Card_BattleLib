class DamageData {
    constructor(hero, target = null, damage = 0, damageType = 0, isCrit = false, isDotDamage = false) {
        this.owner = hero;
        this.target = target;
        this.type = damageType;
        this.isCrit = isCrit;
        this.damage = damage;
        this.isDotDamage = isDotDamage;
        this.thisDamageStats = null;
        this.skillOriginal = null;
        // this.isDodge = isDodge;
    }

}

module.exports = DamageData;







