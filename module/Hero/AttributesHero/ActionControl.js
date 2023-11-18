const DataActionControl = require('../../Data/DataActionControl.js');

const ActionControl = function () {
    this.allAction = {};
};

module.exports = ActionControl;

ActionControl.prototype.addAction = function (cc, owner = null, target = null) {
    if (this.allAction.hasOwnProperty(cc)) {
        this.allAction[cc].push(new DataActionControl(owner, target));
    } else {
        this.allAction[cc] = [];
        if (owner != null) this.allAction[cc].push(new DataActionControl(owner, target));
    }
}

ActionControl.prototype.isActionExsit = function (cc) {
    if (this.allAction.hasOwnproperty(cc)) {
        return true;
    } else return false;
}

ActionControl.prototype.clear = function (cc) {
    this.allAction.length = 0;
}

