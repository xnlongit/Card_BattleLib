const TypeBuffControl = require('../../Enum/TypeBuffControl.js');
const BuffControl = function () {
    this.allBuffActive = {};
    this.listBuffControl = [TypeBuffControl.TYPE_BUFF_CONTROL_PASSIVE_HERO, TypeBuffControl.TYPE_BUFF_CONTROL_ATK, TypeBuffControl.TYPE_BUFF_CONTROL_HEALTH];
}

module.exports = BuffControl;

BuffControl.prototype.addBuff = function (buff) {
    if (this.allBuffActive.hasOwnProperty(buff)) {
        this.allBuffActive[buff] += 1;
    } else {
        this.allBuffActive[buff] = 1;
    }
}

BuffControl.prototype.removeBuff = function (buff) {
    if (this.allBuffActive.hasOwnProperty(buff)) {
        this.allBuffActive[buff] -= 1;
        if (this.allBuffActive[buff] < 0) this.allBuffActive[buff] = 0;
    }
}

BuffControl.prototype.currentAllBuff = function () {
    const list = [];
    for (const k in this.allBuffActive) {
        if (this.allBuffActive[k] > 0 && this.allBuffActive.hasOwnProperty(k)) {
            list.push(k);
        }
    }
    return list;
}

BuffControl.prototype.isThisBuffActive = function (buff) {
    if (this.allBuffActive.hasOwnProperty(buff)) {
        if (this.allBuffActive[buff] > 0) return true;
        else return false;
    } else {
        return false;
    }
}