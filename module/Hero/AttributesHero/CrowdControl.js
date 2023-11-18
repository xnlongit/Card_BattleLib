const TypeCrowdControl = require('../../Enum/TypeCrowdControl.js');
const ActionHero = require('../../Enum/ActionHero.js');

const CrowdControl = function () {
    this.allStunActive = {};
    this.listCcStrong = [TypeCrowdControl.TYPE_CROWD_CONTROL_STUN, TypeCrowdControl.TYPE_CROWD_CONTROL_FREEZE, TypeCrowdControl.TYPE_CROWD_CONTROL_WEAKEN];
    this.listCcSkill = [TypeCrowdControl.TYPE_CROWD_CONTROL_SILENT];
}

module.exports = CrowdControl;

CrowdControl.prototype.addCrowdControl = function (cc) {
    if (this.allStunActive.hasOwnProperty(cc)) {
        this.allStunActive[cc] += 1;
    } else {
        this.allStunActive[cc] = 1;
    }
};

CrowdControl.prototype.removeCrowdControl = function (cc) {
    if (this.allStunActive.hasOwnProperty(cc)) {
        this.allStunActive[cc] -= 1;
        if (this.allStunActive[cc] < 0) this.allStunActive[cc] = 0;
    }
}

CrowdControl.prototype.currentAllStun = function () {
    const list = [];
    for (const k in this.allStunActive) {
        if (this.allStunActive[k] > 0 && this.allStunActive.hasOwnProperty(k)) {
            list.push(k);
        }
    }
    return list;
}

CrowdControl.prototype.isThisCcActive = function (cc) {
    if (this.allStunActive.hasOwnProperty(cc)) {
        if (this.allStunActive[cc] > 0) return true;
        else return false;
    } else {
        return false;
    }
}

CrowdControl.prototype.isCanAction = function (type) {
    switch (type) {
        case ActionHero.ACTION_HERO_TYPE_ATTACK_TURN:
            for (i = 0; i < this.listCcStrong.length; i++) {
                if (this.isThisCcActive(this.listCcStrong[i])) return false;
            }
            return true;
        case ActionHero.ACTION_HERO_TYPE_USE_SKILL:
            for (i = 0; i < this.listCcSkill.length; i++) {
                if (this.isThisCcActive(this.listCcSkill[i])) return false;
            }
            return true;
        default:
            return true;
    }
}
