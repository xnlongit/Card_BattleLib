const TeamType = require('../Enum/TeamType.js');
const DamageType = require('../Enum/DamageType.js');
const ClassHero = require('../Enum/ClassHero.js');
const Role = require('../Enum/Role.js');

const HeroData = function () {
    this.positionInTeam = 0;
    this.id = 0;
    this.teamType = TeamType.TEAM_TYPE_A;
    this.enemyType = TeamType.TEAM_TYPE_B;
    this.power = 0;
    this.isDead = false;

    // Các thuộc tính liên quan đến hero
    this.damageType = DamageType.DAMAGE_TYPE;
    this.role = Role.HERO_ROLE;
    this.classHero = ClassHero.HERO_CLASS;
}