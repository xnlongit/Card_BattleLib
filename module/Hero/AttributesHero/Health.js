const Health = function (hero, max, current) {
    this.hero = hero;
    this.max = max;
    this.current = current;
    this.isOverHealth = false;
}

module.exports = Health;

Health.prototype.setMaxHealth = function (value) {
    let divation = value - this.max;
    this.max = value;
    if (this.max < this.current) this.current = this.max;
    if (divation > 0) this.current += divation;
}

Health.prototype.setCurrentHealth = function (value) {
    this.current = value;
    if (this.current > this.max) this.current = this.max;
    if (this.current <= 0) {
        this.current = 0;
        if (!this.isOverHealth) this.hero.Dead();
        this.isOverHealth = true;
    } else {
        this.isOverHealth = false;
    }
}

Health.prototype.percentHealth = function () {
    return this.current / this.max;
}


