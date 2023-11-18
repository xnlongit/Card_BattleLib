const TeamType = require("../module/Enum/TeamType");
const Hero = require('../module/Hero/Hero.js');
const Utility = require('../module/Common/utility.js');
const LogData = require('../module/Log/logData.js');
const shipA = require('../module/Ship/shipA.js');
const HeroDeathNote = require('../module/NewHeros/4_deathNote_veBinh/character/HeroDeathNote.js');
const HeroKnight = require('../module/NewHeros/3_knight_haiTac/character/HeroKinght.js');
const HeroAaron = require('../module/NewHeros/29_aaron/character/HeroAaron.js');
const HeroAlvine = require('../module/NewHeros/13_alvine_tsuru/character/HeroAlvine.js');
const Skill = require('../module/Skill/skill.js');
const ship = require('../module/Ship/ship.js');
const ShipType = require("../module/Enum/ShipType.js");
const BattleTurn = require('../module/Enum/BattaleTurn.js')

const CardBattleLib = function () {
    let self = this;

    self.heros = [];
    self.ships = [];
    self.skillWaitActive = [];
    self.logData = new LogData(self);
    self.teamWin = TeamType.TEAM_TYPE_B;

    self.obsEndTurns = [];
    self.obsStartTurns = [];
    self.indexTurn = 0;
    self.countEndGame = 0;
};

module.exports = CardBattleLib;

CardBattleLib.prototype.init = async function () {
    this.logData.carbLib = this;

    const ship = new shipA();
    this.addShips(ship, TeamType.TEAM_TYPE_A, ShipType.SHIP_TYPE_ATTACK);
    const ship1 = new shipA();
    this.addShips(ship1, TeamType.TEAM_TYPE_A, ShipType.SHIP_TYPE_DEFENSE);
    const ship2 = new shipA();
    this.addShips(ship2, TeamType.TEAM_TYPE_B, ShipType.SHIP_TYPE_ATTACK);
    const ship3 = new shipA();
    this.addShips(ship3, TeamType.TEAM_TYPE_B, ShipType.SHIP_TYPE_DEFENSE);

    const hero1 = new HeroDeathNote();
    this.addHeros(hero1, 1, TeamType.TEAM_TYPE_A, TeamType.TEAM_TYPE_B);

    const hero2 = new HeroKnight();
    this.addHeros(hero2, 2, TeamType.TEAM_TYPE_A, TeamType.TEAM_TYPE_B);

    const hero3 = new HeroAaron();
    this.addHeros(hero3, 6, TeamType.TEAM_TYPE_A, TeamType.TEAM_TYPE_B);

    const hero4 = new HeroAaron();
    this.addHeros(hero4, 4, TeamType.TEAM_TYPE_A, TeamType.TEAM_TYPE_B);

    const hero5 = new HeroDeathNote();
    this.addHeros(hero5, 8, TeamType.TEAM_TYPE_A, TeamType.TEAM_TYPE_B);

    const hero6 = new HeroDeathNote();
    this.addHeros(hero6, 10, TeamType.TEAM_TYPE_A, TeamType.TEAM_TYPE_B);

    const hero11 = new HeroDeathNote();
    this.addHeros(hero11, 3, TeamType.TEAM_TYPE_B, TeamType.TEAM_TYPE_A);

    const hero12 = new HeroKnight();
    this.addHeros(hero12, 2, TeamType.TEAM_TYPE_B, TeamType.TEAM_TYPE_A);

    const hero13 = new HeroAlvine();
    this.addHeros(hero13, 1, TeamType.TEAM_TYPE_B, TeamType.TEAM_TYPE_A);

    const hero14 = new HeroDeathNote();
    this.addHeros(hero14, 7, TeamType.TEAM_TYPE_B, TeamType.TEAM_TYPE_A);

    const hero15 = new HeroAlvine();
    this.addHeros(hero15, 9, TeamType.TEAM_TYPE_B, TeamType.TEAM_TYPE_A);

    const hero16 = new HeroAlvine();
    this.addHeros(hero16, 10, TeamType.TEAM_TYPE_B, TeamType.TEAM_TYPE_A);


    this.heros = Utility.sortHeroBySpeed(this.heros);
    this.startGame();
    let result = this.startGame();
    result.teamWin = this.teamWin;
    result.battleType = this.battleType;
    console.log("battleData ===== ", JSON.stringify(result));
    return result;
}

CardBattleLib.prototype.addHeros = function (hero, pos, team, enemy) {
    hero.cardBattleLib = this;

    hero.data.positionInTeam = pos;
    hero.data.teamType = team;
    hero.data.enemyType = enemy;

    hero.init();
    this.heros.push(hero);
    return hero;
}

CardBattleLib.prototype.addShips = function (ship, team, type) {
    ship.team = team;
    ship.type = type;
    ship.cardBattleLib = this;
    ship.init();
    this.ships.push(ship);
    return ship;
}

CardBattleLib.prototype.startGame = function () {
    let self = this;
    while (!self.isEndGame()) {
        self.skillWaitActive.length = 0;

        if (!self.heros[self.indexTurn].currentHealth.isOverHealth) {
            self.logData.createNewNodeData();
            self.heros[self.indexTurn].setTurn();
        }

        self.skillWaitActive = Utility.dataDynamicSort(self.skillWaitActive, "skillPriority");
        console.log("lib====================>self.skillWaitActive", self.skillWaitActive.length);
        while (self.skillWaitActive.length > 0) {
            self.skillWaitActive = Utility.dataDynamicSort(self.skillWaitActive, "skillPriority");
            let skill = self.skillWaitActive.shift();
            if (skill.owner != null) {
                if (!skill.owner.currentHealth.isOverHealth) {
                    self.logData.currentNode.skillUse = skill.stats.name;
                    self.logData.currentNode.order = skill.order;
                    self.logData.currentNode.skillPriority = skill.skillPriority;
                    self.logData.currentNode.getLogHero(skill.owner).isAttack = true;
                }
            } else {
                skill.skillActive();
            }

            console.log("lib====================>skill.skillActive", self.skillWaitActive.length);
        }
        self.increamentTurn();
        console.log('-----------------------------------');
    }
    return self.logData.convertDataBattle(self.teamWin);
}

CardBattleLib.prototype.increamentTurn = function () {
    let self = this;
    if (self.indexTurn >= self.heros.length - 1) {
        self.notifyEndTurn();
        self.indexTurn = 0;
        self.countEndGame++;
        console.log("Turn: " + self.countEndGame + " Current Sort Node: " + this.logData.data.data.length);
        for (let i = 0; i < self.heros.length; i++) {
            let item = self.heros[i];
            item.prepairForNewTurn();
        }
        self.heros = Utility.sortHeroBySpeed(self.heros);
        self.logData.createNewNodeData();
        self.logData.currentNode.isEndTurn = true;
        self.notifyStartTurn();
    } else {
        self.indexTurn++;
    }
}

CardBattleLib.prototype.notifyEndTurn = function () {
    let self = this;
    console.log("Call=====================================>notifyEndTurn ", self.obsEndTurns.length);
    for (let i = 0; i < self.obsEndTurns.length; i++) {
        if (self.obsEndTurns[i] != null) {
            self.obsEndTurns[i].emit("UpdateEndTurn", self);
        }
    }
}

CardBattleLib.prototype.notifyStartTurn = function () {
    let self = this;
    console.log("Call=====================================>notifyStartTurn ", self.obsStartTurns.length);
    for (let i = 0; i < self.obsStartTurns.length; i++) {
        if (self.obsStartTurns[i] != null) {
            self.obsStartTurns[i].emit("UpdateStartTurn", self);
        }
    }
}

CardBattleLib.prototype.actionWhenHit = function (teamType, shipType) {
    let self = this;
    let ship = self.ships.find(e => e.team === teamType && e.type === shipType);
    if (ship == null) return;
    ship.stack();
}

CardBattleLib.prototype.checkIfEndGame = function () {
    let self = this;
    let isEndGame = false;
    let left = 0;
    let right = 0;
    for (let i = 0; i < self.heros.length; i++) {
        let hero = self.heros[i];
        console.log("Team " + hero.data.teamType + ", pos " + hero.data.positionInTeam + " => health: " + hero.currentHealth.current);
        if (isNaN(hero.currentHealth.current)) {
            console.log('Giá trị là NaN. Dừng chương trình.');
            process.exit(1); // Thoát chương trình với mã lỗi 1
        }
        if (hero.data.teamType === TeamType.TEAM_TYPE_A && !hero.currentHealth.isOverHealth) left++;
        if (hero.data.teamType === TeamType.TEAM_TYPE_B && !hero.currentHealth.isOverHealth) right++;
    }

    if (left === 0 && right === 0) {
        console.log("Team B Win!!!!!!");
        self.teamWin = TeamType.TEAM_TYPE_B;
        isEndGame = true;
    } else if (left === 0 || right === 0) {
        isEndGame = true;
        if (left === 0) {
            console.log("Team B Win!!!!!!!");
            self.teamWin = TeamType.TEAM_TYPE_B;
        }
        if (right === 0) {
            console.log("Team A Win!!!!!!!");
            self.teamWin = TeamType.TEAM_TYPE_A;
        }
        self.logData.createNewNodeData();
    }
    console.log("Turn: " + self.countEndGame + ">>" + self.indexTurn + " Team A : " + left + " Team B: " + right);
    return isEndGame;
}

CardBattleLib.prototype.isEndGame = function () {
    let self = this;
    if (self.checkIfEndGame()) return true;
    if (self.countEndGame < BattleTurn.BATTLE_MAX_TURN) return false;
    self.logData.showLog();
    self.heros.length = 0;
    return true;
}
CardBattleLib.prototype.attachStartTurn = function (emitterSkill) {
    let self = this;
    if (emitterSkill == null) return;
    console.log("Call=====================================>attachStartTurn");
    self.obsStartTurns.push(emitterSkill);
    for (let i = 0; i < self.obsStartTurns.length; i++) {
        console.log("self.obsStartTurns=====================>", i, self.obsStartTurns[i].id);
    }
}

CardBattleLib.prototype.detachStartTurn = function (emitterSkill) {
    let self = this;
    if (emitterSkill == null) return;
    console.log("Call=====================================>detachStartTurn");
    for (let i = 0; i < self.obsStartTurns.length; i++) {
        if (self.obsStartTurns[i] != null && self.obsStartTurns[i].id == emitterSkill.id) {
            self.obsStartTurns.splice(i, 1);
            break;
        }
    }
}
CardBattleLib.prototype.attachEndTurn = function (emitterSkill) {
    let self = this;
    if (emitterSkill == null) return;
    console.log("Call=====================================>attachEndTurn");
    self.obsEndTurns.push(emitterSkill);
    for (let i = 0; i < self.obsEndTurns.length; i++) {
        console.log("self.obsEndTurns=====================>", i, self.obsEndTurns[i].id);
    }
}

CardBattleLib.prototype.detachEndTurn = function (emitterSkill) {
    let self = this;
    if (emitterSkill == null) return;
    console.log("Call=====================================>detachEndTurn");
    // self.obsEndTurns.remove(e => {
    //     return e != null && e.id == emitterSkill.id;
    // });
    for (let i = 0; i < self.obsEndTurns.length; i++) {
        if (self.obsEndTurns[i] != null && self.obsEndTurns[i].id == emitterSkill.id) {
            self.obsEndTurns.splice(i, 1);
            break;
        }
    }
}
module.exports = CardBattleLib;





