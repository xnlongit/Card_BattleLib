const AbilityCharacterStats = require('../Enum/AbilityCharacterStats.js');
const AttackType = require('../Enum/AtkTypes.js');
const Position = require('../Enum/Position.js');

const Utility = function () { };
module.exports = Utility;

// Sort
function dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        let result = (a[property] < b[property]) ? - 1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function dynamicSortMultiple(arr) {
    let props = arr;
    return function (obj1, obj2) {
        let i = 0, result = 0, numberOfProperties = props.length;
        while (result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}

Utility.dataDynamicSort = function (data, property) {
    data.sort(dynamicSort(property));
    return data;
}

Utility.sortHeroBySpeed = function (heros) {
    heros.sort(function (a, b) {
        return b.baseStats.speed - a.baseStats.speed;
    });
    return heros;
};

// Filter 
Utility.filterRanDom = function (heros, teamType, numberTargets = 1) {
    let self = this;
    let results = heros.filter(e => !e.currentHealth.isOverHealth && e.data.teamType != teamType);
    if (results.length <= numberTargets) return results;

    let list = [];
    for (let i = 0; i < numberTargets; i++) {
        let ind = self.randomRange(0, results.length - 1);
        list.push(results[ind]);
        results.splice(ind, 1);
    }
    return list;
}

Utility.filterNormal = function (heros, teamType, numberTargets = 1) {
    let results = heros.filter(e => !e.currentHealth.isOverHealth && e.data.teamType != teamType);

    let list = [];
    for (let i = 1; Position.POSITION_MAX; i++) {
        let first = results.filterRanDom(e => e.data.posiotionInTeam == i);
        if (first != null) {
            list.push(first);
            break;
        }
    }
    return list;
}

Utility.filterByAtkhighest = function (heros, teamType, numbertargets = 1) {
    let self = this;
    let results = [];
    for (let i = 0; i < heros.length; i++) {
        if (!heros[i].currentHealth.isOverHealth && heros[i].data.teamType != teamType) {
            results.push({
                atk: hero[i].baseStats.atk,
                hero: heros[i]
            })
        }
    }
    let count = numberTargets < results.length ? numberTargets : results.length;
    results = self.dataDynamicSort(results, "-atk");
    let list = [];
    for (let i = 0; i < count; i++) {
        list.push(results[i].hero);
    }
    return list;
}

Utility.filterByHealthHighest = function (heros, teamType, numberTargets = 1) {
    let seft = this;
    let results = [];
    for (let i = 0; i < heros.length; i++) {
        if (!hero[i].currentHealth.isOverHealth && heros[i].data.teamType != teamType) {
            results.push({
                health: heros[i].currentHealth.current,
                hero: heros[i]
            });
        }
    }
    let count = numberTargets < results.length ? numberTargets : results.length;
    results = self.dataDynamicSort(results, "-health");
    let list = [];
    for (let i = 0; i < count; i++) {
        list.push(results[i].hero);
    }
    return list;
};

Utility.filterByHealthLowest = function (heros, teamType, numberTargets = 1) {
    let self = this;
    let results = [];
    for (let i = 0; i < heros.length; i++) {
        if (!heros[i].currentHealth.isOverHealth && heros[i].data.teamType != teamType) {
            results.push({
                health: heros[i].currentHealth.current,
                hero: heros[i]
            });
        }
    }
    let count = numberTargets < results.length ? numberTargets : results.length;
    results = self.dataDynamicSort(results, "health");
    let list = [];
    for (let i = 0; i < count; i++) {
        list.push(results[i].hero);
    }
    return list;
}

Utility.filterAll = function (heros, teamType, numberTargets = 1) {
    let results = heros.filter(e => e.currentHealth.isOverHealth && e.data.teamType != teamType);
    return results;
};

Utility.filterForward = function (heros, heroAttack = null) {
    let self = this;
    if (heroAttack == null) return [];
    let results = heros.filter(e => !e.currentHealth.isOverHealth && e.data.teamType != heroAttack.data.teamType);
    let pos = heroAttack.data.posiotionInTeam;
    let line = pos;
    let list = [];
    if (pos >= 4 && pos <= 7) {
        let listTarget = self.checkLineHasHero(results, line);
        for (let i = 4; i <= 7; i++) {
            listTarget = self.checkLineHasHero(results, i);
            if (listTarget.length > 0) {
                list = list.concat(listTarget);
                break;
            }
        }
    } else {
        if (pos > 5) line -= 7;
        let listTarget = self.checkLineHasHero(results, line);
        if (listTarget.length <= 0) {
            for (let i = 1; i <= 3; i++) {
                listTarget = self.checkLineHasHero(results, i);
                if (listTarget.length > 0) {
                    list = list.concat(listTarget);
                    break;
                }
            }
        }
    }
    if (list.length <= 0) {
        for (let i = 1; i <= 7; i++) {
            let listTarget = self.checkLineHasHero(results, i);
            if (listTarget.length > 0) {
                list = list.concat(listTarget);
                break;
            }
        }
    }
    for (let i = 0; i < list.length; i++) {
        console.log("================>data", list[i].data);
    }
    return list;
};

Utility.filterPos = function (heros, teamType, atkType, numberTargets = 1) {
    let self = this;
    let results = heros.filter(e => !e.currentHealth.isOverHealth && e.data.teamType != teamType);

    let result = [];
    switch (atkType) {
        case AttackType.ATTACK_TYPE_ALL_FRONT:
            result = results.filter(e => e.data.positionInTeam < 4);
            break;
        case AttackType.ATTACK_TYPE_ALL_MID:
            result = results.filter(e => e.data.positionInTeam >= 4 && e.data.positionInTeam <= 7);
            break;
        case AttackType.ATTACK_TYPE_ALL_BACK:
            result = results.filter(e => e.data.positionInTeam > 7);
            break;
    }

    if (numberTargets != -1) {
        if (numberTargets > result.length) return result;
        else {
            let list = [];
            for (let i = 0; i < numberTargets; i++) {
                let rand = self.randomRange(0, result.length - 1);
                list.push(result[rand]);
                result.slice(rand, 1);
            }
            return list;
        }
    }

    return result;
}

Utility.filterPosMostTarget = function (heros, teamType, atkType) {
    let self = this;
    let result = heros.filter(e => !e.currentHealth.isOverHealth && e.data.teamType !== teamType);

    let result1 = result.filter(e => e.data.positionInTeam < 4);
    let result2 = result.filter(e => e.data.positionInTeam >= 4 && e.data.positionInTeam <= 7);
    let result3 = result.filter(e => e.data.positionInTeam > 4);
    let targets = result1;
    if (targets.length < result2.length) {
        targets = result2;
    }
    if (targets.length < result3.length) {
        targets = result3;
    }
    return targets;
}

// Random
Utility.randomRange = function (from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

// 
Utility.initAbilitiesFromArray = function (arrObject = []) {
    if (arguments.length <= 0) {
        arrObject = [];
    }

    let abilities = [];
    for (let i = 0; i < AbilityCharacterStats.ABILITY_MAX; i++) {
        abilities.push(0);
    }

    if (arrObject.length <= 0) {
        return abilities;
    }

    for (let i = 0; i < arrObject.length; i++) {
        let each = arrObject[i];
        let abilityId = each.abilityId;
        if (abilityId >= AbilityCharacterStats.ABILITY_MIN && abilityId <= AbilityCharacterStats.ABILITY_MAX) {
            abilities[abilityId] += each.value;
        }
    }
    return abilities;
}

Utility.listAttack = function (heros, teamType, atkType, numberTargets = 1, heroAttack = null) {
    let self = this;
    let result = [];
    switch (atkType) {
        case AttackType.ATTACK_TYPE_NONE:
            result = self.filterRanDom(heros, teamType, numberTargets);
            break;
        case AttackType.ATTACK_TYPE_ATK_HIGHEST:
            result = self.filterByAtkhighest(heros, teamType, numberTargets);
            break;
        case AttackType.ATTACK_TYPE_HEALTH_HIGHEST:
            result = self.filterByHealthHighest(heros, teamType, numberTargets);
            break;
        case AttackType.ATTACK_TYPE_HEALTH_LOWEST:
            result = self.filterByHealthLowest(heros, teamType, numberTargets);
            break;
        case AttackType.ATTACK_TYPE_ALL:
            result = self.filterAll(heros, teamType, numberTargets);
            break;
        case AttackType.ATTACK_TYPE_NORMAL:
            result = self.filterNormal(heros, teamType, numberTargets);
            break;
        case AttackType.ATTACK_TYPE_FORWARD:
            result = self.filterForward(heros, teamType, numberTargets);
            break;
        case AttackType.ATTACK_TYPE_ALL_FRONT:
            result = self.filterPos(heros, teamType, atkType, numberTargets);
            break;
        case AttackType.ATTACK_TYPE_ALL_MID:
            result = self.filterPos(heros, teamType, atkType, numberTargets);
            break;
        case AttackType.ATTACK_TYPE_ALL_BACK:
            result = self.filterPos(heros, teamType, atkType, numberTargets);
            break;
        case AttackType.ATTACK_TYPE_LINE_MOST_TARGET:
            result = self.filterPosMostTarget(heros, teamType, atkType, numberTargets);
            break;
    }
    if (result.count <= 0) {
        result = self.filterRanDom(heros, teamType, numberTargets);
    }
    return result;
};

Utility.checkLineHasHero = function (heros, line) {
    let results = [];
    switch (line) {
        case 1:
            results = heros.filter(e => e.data.posiotionInTeam == 1 || e.data.posiotionInTeam == 8);
            break;
        case 2:
            results = heros.filter(e => e.data.posiotionInTeam == 2 || e.data.posiotionInTeam == 9);
            break;
        case 3:
            results = heros.filter(e => e.data.posiotionInTeam == 3 || e.data.posiotionInTeam == 10);
            break;
        default:
            results = heros.filter(e => e.data.posiotionInTeam == line);
            break;
    }
    return results;
}
