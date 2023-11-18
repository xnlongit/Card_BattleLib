const LogNodeData = require('./logNodeData.js');
const teamType = require('../Enum/TeamType.js');
const battleStar = require('../Enum/battleStar.js')

class LogData {
    constructor(carbLib) {
        this.carbLib = carbLib;
        this.currentNode = null;
        this.data = {
            data: []
        };
    }

    createNewNodeData() {
        this.currentNode = new LogNodeData(this.carbLib.countEndGame, null, this.carbLib.heros, this.carbLib.teamWin);
        this.currentNode.nodeOrder = this.data.data.length;
        this.data.data.push(this.currentNode);
    }

    showLog() {
        console.log("=====================>data", JSON.stringify(this.data));
    }

    convertDataBattle(teamWin) {

        let battleData = this.data;

        let team1Damage = 0;
        let team2Damage = 0
        for (let i = 0; i < battleData.data.length; i++) {
            let champions = battleData.data[i].champions;
            for (let k = 0; k < champions.length; k++) {
                if (champions[k].teamType === teamType.TEAM_TYPE_B) {
                    team1Damage += champions[k].damageTaken;
                }

                if (champions[k].teamType === teamType.TEAM_TYPE_A) {
                    team2Damage += champions[k].damageTaken;
                }
            }
        }

        let lastNodeOrder = battleData.data[battleData.data.length - 1];
        let team1Total = 0;
        let team1Die = 0;
        let team2Total = 0;
        let team2Die = 0;
        for (let i = 0; i < lastNodeOrder.champions.length; i++) {
            if (lastNodeOrder.champions[i].teamType === teamType.TEAM_TYPE_A) {
                team1Total += 1;
                if (lastNodeOrder.champions[i].currentHealth <= 0) team1Die += 1;
            }

            if (lastNodeOrder.champions[i].teamType === teamType.TEAM_TYPE_B) {
                team2Total += 1;
                if (lastNodeOrder.champions[i].currentHealth <= 0) team2Die += 1;
            }
        }

        let star = 0;
        if (teamWin === teamType.TEAM_TYPE_A) {
            if (team1Die < 2) star = battleStar.PVE_BATTLE_STAR_MAX;
            else if(team1Die == 1) star = battleStar.PVE_BATTLE_STAR_DIE_1;
            else if (team1Die === 2) star = battleStar.PVE_BATTLE_STAR_DIE_2;
            else star = battleStar.PVE_BATTLE_STAR_MIN;
        }

        return {
            data: battleData,
            star: star,
            team1Damage: team1Damage,
            team2Damage: team2Damage,
        }
    }
}

module.exports = LogData;