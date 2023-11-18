const HeroLogData = require('./heroLogData');
const skillPriority = require('../Enum/SkillPriority.js');

class LogNodeData {
    constructor(turn, skillUse, heros, teamWin = 0) {
        this.nodeOrder = -1;
        this.isEndTurn = false;
        this.order = -1;
        this.skillPriority = skillPriority.SKILL_PRIORITY_AFFECT_HEALTH;
        this.turn = turn;
        this.skillUse = skillUse;
        this.champions = [];
        if(heros != null)
            for(let i = 0; i < heros.length; i ++){
                let log = new HeroLogData();
                log.setLog(heros[i]);
                this.champions.push(log)
            }
        this.teamWin = teamWin;
    }

    getLogHero(hero) {
        if(hero == null) return null;
        return this.champions.find(e => e.positionInTeam == hero.data.positionInTeam && e.id == hero.data.id && e.teamType == hero.data.teamType);
    }
}

module.exports = LogNodeData;