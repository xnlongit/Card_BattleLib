const Health = require('./AttributesHero/Health.js');
const BuffStats = require('./AttributesHero/BuffStats.js');
const CharacterStats = require('./AttributesHero/CharacterStats.js');
const CrowdControl = require('./AttributesHero/CrowdControl.js');
const BuffControl = require('./AttributesHero/BuffControl.js');
const HeroData = require('../Data/HeroData.js');
const TeamType = require('../Enum/TeamType.js');
const getSkill = require('../Enum/getSkill.js');
const ActionControl = require('../Hero/AttributesHero/ActionControl.js');
const BuffType = require('../Enum/BuffType.js');
const DataActionControl = require('../Data/DataActionControl.js');
const DamageType = require('../Enum/DamageType.js');
const ShipType = require('../Enum/ShipType.js');
const SkillType = require('../Enum/SkillType.js');
const pointPower = require('../Enum/pointPower.js');

const SkillNormalAttack = require('../Skill/SkillNormalAttack.js');

const satThuSkill1 = require('../NewHeros/1_satThu/satThuSkill1.js');
const satThuSkill2Buff = require('../NewHeros/1_satThu/satThuSkill2Buff.js');
const xaThuSkill1 = require('../NewHeros/2_xaThu/xaThuSkill1.js');
const xaThutSkill2Buff = require('../NewHeros/2_xaThu/xaThuSkill2Buff.js');
const knightSkill1 = require('../NewHeros/3_knight_haiTac/knightSkill1.js');
const knightSkill2Buff = require('../NewHeros/3_knight_haiTac/knightSkill2Buff.js');
const deathNoteSkill1 = require('../NewHeros/4_deathNote_veBinh/deathNoteSkill1.js');
const deathNoteSkill1Buff = require('../NewHeros/4_deathNote_veBinh/deathNoteSkill1Buff.js');
const deathNoteSkill2Buff = require('../NewHeros/4_deathNote_veBinh/deathNoteSkill2Buff.js');
const quancmSkill1 = require('../NewHeros/5_quancm/quancmSkill1.js');
const quancmSkill1Buff = require('../NewHeros/5_quancm/quancmSkill1Buff.js');
const quancmSkill2Buff = require('../NewHeros/5_quancm/quancmSkill2buff.js');
const kakuSkill1 = require('../NewHeros/6_kaku/kakuSkill1.js');
const kakuSkill1DeBuff = require('../NewHeros/6_kaku/kakuSkill1DeBuff.js');
const kakuSkill2Buff = require('../NewHeros/6_kaku/kakuSkill2Buff.js');
const kiemSiSkill1 = require('../NewHeros/7_kiemSi/kiemSiSkill1.js');
const kiemSiSkill1Debuff = require('../NewHeros/7_kiemSi/kiemSiSkill1Debuff.js');
const kiemSiSkill2Buff = require('../NewHeros/7_kiemSi/kiemSiSkill2Buff.js');
const kiemSi2Skill1 = require('../NewHeros/8_kiemSi2/kiemSi2Skill1.js');
const kiemSi2Skill2Buff = require('../NewHeros/8_kiemSi2/kiemSi2Skill2Buff.js');
const kumaSkill1 = require('../NewHeros/9_kuma/kumaSkill1.js');
const kumaSkill2 = require('../NewHeros/9_kuma/kumaSkill2.js');
const kumaSkill2Buff = require('../NewHeros/9_kuma/kumaSkill2Buff.js');
const kumaSkill3Buff = require('../NewHeros/9_kuma/kumaSkill3Buff.js');
const liuKangSkill1 = require('../NewHeros/10_Liukang_DoiTruong/liuKangSkill1.js');
const liuKangSkill1Buff = require('../NewHeros/10_Liukang_DoiTruong/liuKangSkill1Buff.js');
const liuKangSkill2 = require('../NewHeros/10_Liukang_DoiTruong/liuKangSkill2.js');
const liuKangSkill2Buff = require('../NewHeros/10_Liukang_DoiTruong/liuKangSkill2Buff.js');
const liuKangSkill3Buff = require('../NewHeros/10_Liukang_DoiTruong/liuKangSkill3Buff.js');
const peronaSkill1 = require('../NewHeros/11_perona/peronaSkill1.js');
const peronaSkill2 = require('../NewHeros/11_perona/peronaSkill2.js');
const peronaSkill3Buff = require('../NewHeros/11_perona/peronaSkill3Buff.js');
const mr2Skill1 = require('../NewHeros/12_mr2/mr2Skill1.js');
const mr2Skill2 = require('../NewHeros/12_mr2/mr2Skill2.js');
const mr2Skill2Buff = require('../NewHeros/12_mr2/mr2Skill2Buff.js');
const mr2Skill3Buff = require('../NewHeros/12_mr2/mr2Skill3Buff.js');
const alvineSkill1 = require('../NewHeros/13_alvine_tsuru/alvineSkill1.js');
const alvineSkill1Debuff = require('../NewHeros/13_alvine_tsuru/alvineSkill1Debuff.js');
const alvineSkill2 = require('../NewHeros/13_alvine_tsuru/alvineSkill2.js');
const alvineSkill2Debuff = require('../NewHeros/13_alvine_tsuru/alvineSkill2Debuff.js');
const alvineSkill3Buff = require('../NewHeros/13_alvine_tsuru/alvineSkill3Buff.js');
const nicorobinSkill1 = require('../NewHeros/14_nicorobin/nicorobinSkill1.js');
const nicorobinSkill1Debuff = require('../NewHeros/14_nicorobin/nicorobinSkill1Debuff.js');
const nicorobinSkill2 = require('../NewHeros/14_nicorobin/nicorobinSkill2.js');
const nicorobinSkill2Debuff = require('../NewHeros/14_nicorobin/nicorobinSkill2Debuff.js');
const nicorobinSkill3Buff = require('../NewHeros/14_nicorobin/nicorobinSkill3Buff.js');
const zoroKidSkill1 = require('../NewHeros/15_zorokid/zoroKidSkill1.js');
const zoroKidSkill1Debuff = require('../NewHeros/15_zorokid/zoroKidSkill1Debuff.js');
const zoroKidSkill2 = require('../NewHeros/15_zorokid/zoroKidSkill2.js');
const zoroKidSkill2Debuff = require('../NewHeros/15_zorokid/zoroKidSkill2Debuff.js');
const zoroKidSkill3Buff = require('../NewHeros/15_zorokid/zoroKidSkill3Buff.js');
const haiQuanSkill1 = require('../NewHeros/16_haiquan/haiQuanSkill1.js');
const haiquanSkill1Debuff = require('../NewHeros/16_haiquan/haiQuanSkill1Debuff.js');
const haiquanSkill2 = require('../NewHeros/16_haiquan/haiQuanSkill2.js');
const haiquanSkill2Debuff = require('../NewHeros/16_haiquan/haiQuanSkill2Debuff.js');
const haiquanSkill3Buff = require('../NewHeros/16_haiquan/haiQuanSkill3Buff.js');
const kidSkill1 = require('../NewHeros/19_kid/kidSkill1.js');
const kidSkill1Debuff = require('../NewHeros/19_kid/kidSkill1Debuff.js');
const kidSkill2 = require('../NewHeros/19_kid/kidSkill2.js');
const kidSkill3Buff = require('../NewHeros/19_kid/kidSkill3Buff.js');
const cuuThuongSkill1 = require('../NewHeros/20_cuuthuong/cuuThuongSkill1.js');
const cuuThuongSkill1Buff = require('../NewHeros/20_cuuthuong/cuuThuongSkill1Buff.js');
const cuuThuongSkill2 = require('../NewHeros/20_cuuthuong/cuuThuongSkill2.js');
const cuuThuongSkill2Buff = require('../NewHeros/20_cuuthuong/cuuThuongSkill2Buff.js');
const cuuThuongSkill3Buff = require('../NewHeros/20_cuuthuong/cuuThuongSkill3Buff.js');
const { BUFF_TYPE_ADD } = require('../Enum/BuffType.js');


class Hero {
    constructor(battleLib) {
        this.obsAttacks = [];
        this.obsTakeDamages = [];
        this.obsTurns = [];
        this.skills = [];
        this.receives = [];

        this.data = {
            id: 0,
            baseHeroId: 0,
            power: 0,
            teamType: TeamType.TEAM_TYPE_A,
            enemyType: TeamType.TEAM_TYPE_B,
            isDead: false,
            positionInteam: 0,
            damageType: 0,
            role: 0,
            heroClass: 0,
        };

        this.currentHealth = null;
        this.baseStats = null;
        this.currentStats = null;
        this.buff = null;
        this.deBuff = null;
        this.currentStatus = null;
        this.currentBuff = null;
        this.currentAction = null;
        this.heroAffected = null;
        this.allDamageDealed = 0;
        this.skillIsUsing = null;
        this.coolDownPower = 2;
        this.damageData = null;

        this.cardBattleLib = battleLib;
    }

    init() {
        this.setup();
    }

    prepairForNewTurn() {
        if (this.currentAction != null) this.currentAction.clear();
        else this.currentAction = new ActionControl();
    }

    setup() {
        this.currentStatus = new CrowdControl();
        this.currentBuff = new BuffControl();
        this.currentAction = new ActionControl();
        this.buff = new BuffStats(this);
        this.debuff = new BuffStats(this);
        this.baseStats = new CharacterStats(this.data.id);
        this.currentStats = this.baseStats.caculateIndex(this.buff, this.debuff);
        this.currentHealth = new Health(this, this.currentStats.health, this.currentStats.health);
        this.data.power = 50;
    }

    addBuff(info) {
        if (info.type === BuffType.BUFF_TYPE_PERCENT) {
            this.baseStats.buffPercent(info.points);
            this.caculateStats();
        }
    }

    caculateStats() {
        this.currentStats = this.baseStats.caculateIndex(this.buff, this.debuff);
        this.currentHealth.setMaxHealth(this.currentStats.health);
    }

    clearReceiveSkill() {
        if (this.receives.length === 0) return;
        this.receives = this.receives.filter(e => e != null && (e.currentLifeTurn > 0 || e.currentLifeTurn === -1));
    }

    receiveSkill(skill) {
        this.clearReceiveSkill();
        if (!this.isSkillExist(skill)) {
            skill.enemy = this;
            skill.initSkill();
            this.receives.push(skill);
        } else {
            let skillFind = this.receives.find(e => e.stats.name == skill.stats.name);
            skillFind.resetLifeTurn();
        }
        this.actionWhenReciveSkill(skill);
        this.caculateStats();
    }

    actionWhenReciveSkill(skill) {
        for (let i = 0; i < this.skills.length; i++) {
            let item = this.skills[i];
            item.actionWhenReciveSkill(skill);
        }
        for (let i = 0; i < this.receives.length; i++) {
            let item = this.receives[i];
            item.actionWhenReciveSkill(skill);
        }
    }

    isSkillExist(skill) {
        let skillFind = this.receives.find(e => e.stats.name == skill.stats.name);
        if (skillFind != null) return true;
        else return false;
    }

    setTurn() {
        console.log("Hero " + this.data.positionInteam + " team " + this.data.teamType + " : " + this.currentHealth.current + " health.");
        this.notifyTurnHero();
        this.clearReceiveSkill();
        this.currentAction.addAction(DataActionControl.ACTION_HERO_TYPE_ATTACK_TURN);
        if (!this.currentStatus.isCanAction(DataActionControl.ACTION_HERO_TYPE_ATTACK_TURN)) {
            return;
        }
        this.attackEnemy();
    }

    recoverHealth(amount, hero, isUseIndexBonus = true) {
        let indexBonus = 0;
        if (isUseIndexBonus) {
            indexBonus = this.currentStats.healingRecieveBonus / 100;
        }
        let totalHeal = amount * (1 + indexBonus);
        this.currentHealth.current += totalHeal;
        this.logDataHeal(totalHeal);
        console.log("Hero " + hero.data.positionInteam + " heal " + totalHeal + " to Hero " + this.data.positionInteam);
    }

    takeDamage(data) {
        this.damageData = data;
        this.heroAffected = this.damageData.owner;

        if (this.damageData.isDodge) {
            this.logData(0, this.damageData.isCrit, this.damageData.isDodge);
            return;
        }

        this.damageData = this.getSkillEffect();
        let reduceTypeDamge = 0;
        let reduceCrit = 0;
        if (this.damageData.type === DamageType.DAMAGE_TYPE_PHYSIC) {
            reduceTypeDamge = this.currentStats.physicReduce / 100;
        } else {
            reduceTypeDamge = this.currentStats.magicReduce / 100;
        }
        if (this.damageData.isCrit) {
            reduceCrit = this.currentStats.critDamageReduce / 100;
        }
        let totalDamage = this.damageData.damage * (1 - this.currentStats.damageReduce + this.damageData.thisDamageStats.penentration / 100) * (1 - reduceTypeDamge) * (1 - reduceCrit);
        if (this.currentHealth.current - totalDamage < 0) {
            totalDamage *= (1 - this.currentStats.lastBreath / 100);
            totalDamage *= (1 + this.damageData.owner.currentStats.endDamage / 100);
        }
        this.currentHealth.setCurrentHealth(this.currentHealth.current - totalDamage);
        this.damageData.owner.allDamageDealed += totalDamage;

        console.log("Hero " + this.damageData.owner.data.positionInteam + " team " + this.damageData.owner.data.teamType + " deal " + totalDamage + " damage to Hero " + this.data.positionInteam + " team " + this.data.teamType);
        console.log(`Hero ${this.data.positionInteam} team ${this.data.teamType} health ${this.currentHealth.current}`);

        this.cardBattleLib.actionWhenHit(this.damageData.owner.data.teamType, ShipType.SHIP_TYPE_ATTACK);
        this.cardBattleLib.actionWhenHit(this.data.teamType, ShipType.SHIP_TYPE_DEFENSE);
        this.currentAction.addAction(DataActionControl.ACTION_HERO_TYPE_TAKE_DAMAGE, this.damageData.owner);

        this.logData(totalDamage, this.damageData.isCrit, this.damageData.isDodge);
        this.notifyTakeDamage();
    }

    logData(damage, isCrit, isDodge) {
        let data = this.cardBattleLib.logData.currentNode.getLogHero(this);
        try {
            data.maxHealth = this.currentHealth.max;
            data.currentHealth = this.currentHealth.current;
            data.skillRecives.length = 0;
            data.listBuff.length = 0;
            data.listCC.length = 0;
            for (let i = 0; i < this.receives.length; i++) {
                data.skillRecives.push(this.receives[i].stats.name);
            }
            let list1 = this.currentStatus.currentAllStun();
            for (let i = 0; i < list1.length; i++) {
                data.listCC.push(list1[i]);
            }
            let list2 = this.currentBuff.currentAllBuff();
            for (let i = 0; i < list2.length; i++) {
                data.listBuff.push(list2[2]);
            }

            data.damageTaken += damage;
            data.isCrit = isCrit;
            data.isDodge = isDodge;
        } catch (err) {
            console.log("=================> error logData: team" + this.data.teamType + ", pos: " + this.data.positionInteam);
        }
    }

    logDataHeal(heal) {
        let data = this.cardBattleLib.logData.currentNode.getLogHero(this);
        try {
            data.maxHealth = this.currentHealth.max;
            data.currentHealth = this.currentHealth.current;
            data.skillRecives.length = 0;
            data.listBuff.length = 0;
            data.listCC.length = 0;

            for (let i = 0; i < this.receives.length; i++) {
                data.skillRecives.push(this.receives[i].stats.name);
            }
            let list1 = this.currentStatus.currentAllStun();
            for (let i = 0; i < list1.length; i++) {
                data.listCC.push(list1[1]);
            }
            let list2 = this.currentBuff.currentAllBuff();
            for (let i = 0; i < list2.length; i++) {
                data.listBuff.push(list2[i]);
            }

            data.heal += heal;
        } catch (err) {
            console.log("================> error logData : team: " + this.data.teamType + ", pos: " + this.data.positionInteam);
        }
    }

    attackEnemy() {
        this.cardBattleLib.logData.currentNode.getLogHero(this).isAttack = true;
        this.allDamageDealed = 0;
        let skillPowerFull = this.getSkillType(SkillType.SKILL_TYPE_POWER_FULL);
        if (this.isCanUseSkillPowerFull() && this.currentStatus.isCanAction(DataActionControl.ACTION_HERO_TYPE_USE_SKILL)) {
            console.log(`Hero ${this.data.id} user powerfull attack`);
            console.log("==================> skillPowerFullUse", skillPowerFull.stats.name);
            skillPowerFull.skillActive();
            this.skillIsUsing = skillPowerFull;
            this.data.power = 0;
            this.coolDownPower++;
        } else {
            if (this.isCanUsePowerSkill() && this.currentStatus.isCanAction(DataActionControl.ACTION_HERO_TYPE_USE_SKILL)) {
                console.log(`Hero ${this.data.id} user power attack`);
                let skill = this.getSkillType(SkillType.SKILL_TYPE_POWER);
                if (skill != null) {
                    console.log("===============> skill Use", skill.stats.name);
                    skill.skillActive();
                    this.skillIsUsing = skill;
                    this.coolDownPower = 0;
                } else {
                    let skill = this.getSkillType(SkillType.SKILL_TYPE_NORMAL);
                    if (skill != null) {
                        console.log("====================>skill Use", skill.stats.name);
                        skill.skillActive();
                        this.skillIsUsing = skill;
                        this.coolDownPower++;
                        console.log(`Hero ${this.data.id} user normal attack`);
                    } else {
                        console.log(`Hero ${this.data.id} user not skill normal attack1`);
                    }
                }
            } else {
                let skill = this.getSkillType(SkillType.SKILL_TYPE_NORMAL);
                if (skill != null) {
                    console.log("=============>skill Use", skill.stats.name);
                    skill.skillActive();
                    this.skillIsUsing = skill;
                    this.coolDownPower++;
                    console.log(`Hero ${this.data.id} user normal attack`);
                } else {
                    console.log(`Hero ${this.data.id} user not skill normal attack2`);
                }
            }
            this.addPower();
        }
        this.currentAction.addAction(DataActionControl.ACTION_HERO_TYPE_ATTACK_TURN, this);
        this.cardBattleLib.logData.currentNode.skillUse = this.skillIsUsing.stats.name;
        this.cardBattleLib.logData.currentNode.order = this.skillIsUsing.order;
        this.notifyAttack();
    }

    addPower() {
        this.data.power += pointPower.POINT_POWER;
        if (this.data.power > pointPower.POINT_POWER_MAX) this.data.power = pointPower.POINT_POWER_MAX;
    }

    cleanBuff() {
        for (let i = 0; i < this.receives.length; i++) {
            let item = this.receives[i];
            if (item.stats.canCleanBySkill) {
                item.recoverSkill();
            }
        }
    }

    dead() {
        this.skills.length = 0;
        this.receives.length = 0;
        console.log(`Hero ${this.data.positionInTeam} team ${this.data.teamType} is dead in turn: ${this.cardBattleLib.countEndGame}`);
    }

    isCanUseSkillPowerFull() {
        let skillPowerFull = this.getSkillType(SkillType.SKILL_TYPE_POWER_FULL);
        if (skillPowerFull == null) return false;
        else return this.isPowerMax();
    }

    isPowerMax() {
        return this.data.power >= pointPower.POINT_POWER_MAX;
    }

    isCanUsePowerSkill() {
        return this.coolDownPower > 1;
    }

    getSkillType(skillType) {
        return this.skills.find(e => e.skillType === skillType);
    }

    getSkillEffect() {
        for (let i = 0; i < this.receives.length; i++) {
            this.damageData = this.receives[i].effectSkill(this.damageData);
        }
        return this.damageData;
    }

    getDamageThisTime() {
        return this.damageData;
    }

    isAttackThisTurn() {
        return this.currentAction.isActionExsit(DataActionControl.ACTION_HERO_TYPE_ATTACK_TURN);
    }

    attachTakeDamage(emitterSkill) {
        if (emitterSkill == null) return;
        console.log(`Hero team: ${this.data.teamType}-Pos: ${this.data.positionInteam} Call===================> attachTakeDamage`);
        console.log("attachTakeDamage(emitterSkill)============>", emitterSkill.stats);
        this.obsTakeDamages.push(emitterSkill);
        for (let i = 0; i < this.obsTakeDamages.length; i++) {
            console.log("hero.obsTakeDamages=====================>", i, this.obsTakeDamages[i].id);
        }
    }

    attachAttack(emitterSkill) {
        if (emitterSkill == null) return;
        console.log(`Hero team: ${this.data.teamType}-Pos: ${this.data.positionInTeam} Call=====================================>attachAttack`);
        this.obsAttacks.push(emitterSkill);
        for (let i = 0; i < this.obsAttacks.length; i++) {
            console.log("hero.obsAttacks=====================>", i, this.obsAttacks[i].id);
        }
    }

    attachTurn(emitterSkill) {
        if (emitterSkill == null) return;
        console.log(`Hero team: ${this.data.teamType}-Pos: ${this.data.positionInTeam} Call=====================================>attachTurn`);
        this.obsTurns.push(emitterSkill);
        for (let i = 0; i < this.obsTurns.length; i++) {
            console.log("hero.obsTurns=====================>", i, this.obsTurns[i].id);
        }
    }

    detachTakeDamage(emitterSkill) {
        if (emitterSkill == null) return;
        console.log("Hero team: ${this.data.teamType}-Pos: ${this.data.positionInTeam} Call=====================================>detachTakeDamage");
        this.obsTakeDamages.remove(e => {
            return e != null && e.id == emitterSkill.id;
        });
        for (let i = 0; i < this.obsTakeDamages.length; i++) {
            console.log("hero.detachTakeDamage=====================>", i, this.obsTakeDamages[i].id);
        }
    }

    detachAttack(emitterSkill) {
        if (emitterSkill == null) return;
        console.log(`Hero team: ${this.data.teamType}-Pos: ${this.data.positionInTeam} Call=====================================>detachAttack`);
        this.obsAttacks.remove(e => {
            return e != null && e.id == emitterSkill.id;
        });
        for (let i = 0; i < this.obsAttacks.length; i++) {
            console.log("hero.detachAttack=====================>", i, this.obsAttacks[i].id);
        }
    }

    detachTurn(emitterSkill) {
        if (emitterSkill == null) return;
        console.log(`Hero team: ${this.data.teamType}-Pos: ${this.data.positionInTeam} Call=====================================>detachTurn`);
        this.obsTurns.remove(e => {
            return e != null && e.id == emitterSkill.id;
        });
        for (let i = 0; i < this.obsTurns.length; i++) {
            console.log("hero.detachTurn=====================>", i, this.obsTurns[i].id);
        }
    }

    notifyTurnHero() {
        console.log(`Hero team: ${this.data.teamType}-Pos: ${this.data.positionInTeam} Call=====================================>notifyTurnHero: ${this.obsTurns.length}`);
        for (let i = 0; i < this.obsTurns.length; i++) {
            console.log("emit===============>UpdateTurnHero", this.obsTurns[i].id);
            this.obsTurns[i].emit("UpdateTurnHero", this);
        }
    }

    notifyTakeDamage() {
        console.log(`Hero team: ${this.data.teamType}-Pos: ${this.data.positionInTeam} Call=====================================>notifyTakeDamage: ${this.obsTakeDamages.length}`);
        for (let i = 0; i < this.obsTakeDamages.length; i++) {
            console.log("emit===============>UpdateTakeDamage", this.obsTakeDamages[i].id, this.obsTakeDamages[i].stats);
            this.obsTakeDamages[i].emit("UpdateTakeDamage", this);
        }
    }

    notifyAttack() {
        console.log(`Hero team: ${this.data.teamType}-Pos: ${this.data.positionInTeam} Call=====================================>notifyAttack: ${this.obsAttacks.length}`);
        for (let i = 0; i < this.obsAttacks.length; i++) {
            console.log("emit===============>UpdateAttack", this.obsAttacks[i].id);
            this.obsAttacks[i].emit("UpdateAttack", this);
        }
    }


    getHeroSkill(skill) {
        let id = skill.baseSkillId;
        switch (id) {
            case getSkill.SKILL_NORMAL_ATTACK:
                return new SkillNormalAttack(skill);
            case getSkill.SKILL_SATTHU_1:
                return new satThuSkill1(skill);
            case getSkill.SKILL_SATTHU_2_BUFF:
                return new satThuSkill2Buff(skill);
            case getSkill.SKILL_XATTHU_1:
                return new xaThuSkill1(skill);
            case getSkill.SKILL_XATTHU_2_BUFF:
                return new xaThutSkill2Buff(skill);
            case getSkill.SKILL_KNIGHT_1:
                return new knightSkill1(skill);
            case getSkill.SKILL_KNIGHT_2_BUFF:
                return new knightSkill2Buff(skill);
            case getSkill.SKILL_DEATH_NOTE_1:
                return new deathNoteSkill1(skill);
            case getSkill.SKILL_DEATH_NOTE_1_BUFF:
                return new deathNoteSkill1Buff(skill);
            case getSkill.SKILL_DEATH_NOTE_2_BUFF:
                return new deathNoteSkill2Buff(skill);
            case getSkill.SKILL_QUAN_CM_1:
                return new quancmSkill1(skill);
            case getSkill.SKILL_QUAN_CM_1_BUFF:
                return new quancmSkill1Buff(skill);
            case getSkill.SKILL_QUAN_CM_2_BUFF:
                return new quancmSkill2Buff(skill);
            case getSkill.SKILL_KAKU_1:
                return new kakuSkill1(skill);
            case getSkill.SKILL_KAKU_1_BUFF:
                return new kakuSkill1DeBuff(skill);
            case getSkill.SKILL_KAKU_2:
                return new kakuSkill2Buff(skill);
            case getSkill.SKILL_KIEM_SI_1:
                return new kiemSiSkill1(skill);
            case getSkill.SKILL_KIEM_SI_1_DEBUFF:
                return new kiemSiSkill1Debuff(skill);
            case getSkill.SKILL_KIEM_SI_2_BUFF:
                return new kiemSi2Skill2Buff(skill);
            case getSkill.SKILL_KIEM_SI2_1:
                return new kiemSi2Skill1(skill);
            case getSkill.SKILL_KIEM_SI2_2_BUFF:
                return new kiemSi2Skill2Buff(skill);
            case getSkill.SKILL_KUMA_1:
                return new kumaSkill1(skill);
            case getSkill.SKILL_KUMA_2:
                return new kumaSkill2(skill);
            case getSkill.SKILL_KUMA_2_BUFF:
                return new kumaSkill2Buff(skill);
            case getSkill.SKILL_KUMA_3_BUFF:
                return new kumaSkill3Buff(skill);
            case getSkill.SKILL_LIUKANG_1:
                return new liuKangSkill1(skill);
            case getSkill.SKILL_LIUKANG_1_BUFF:
                return new liuKangSkill1Buff(skill);
            case getSkill.SKILL_LIUKANG_2:
                return new liuKangSkill2(skill);
            case getSkill.SKILL_LIUKANG_2_BUFF:
                return new liuKangSkill2Buff(skill);
            case getSkill.SKILL_LIUKANG_3_BUFF:
                return new liuKangSkill3Buff(skill);
            case getSkill.SKILL_PERONA_1:
            case 1002210:
            case 1002310:
            case 1002410:
            case 1002510:
            case 1002610:
            case 1002710:
            case 1002810:
            case 1002910:
            case 1003010:
            case 1003110:
            case 1003210:
            case 1003310:
            case 1003410:
            case 1003510:
            case 1003610:
            case 1003710:
            case 1003810:
            case 1003910:
            case 1004010:
            case 1004410:
                return new peronaSkill1(skill);
            case getSkill.SKILL_PERONA_2:
            case 1002220:
            case 1002320:
            case 1002420:
            case 1002520:
            case 1002620:
            case 1002720:
            case 1002820:
            case 1002920:
            case 1003020:
            case 1003120:
            case 1003220:
            case 1003320:
            case 1003420:
            case 1003520:
            case 1003620:
            case 1003720:
            case 1003820:
            case 1003920:
            case 1004020:
            case 1004420:
                return new peronaSkill2(skill);
            case getSkill.SKILL_PERONA_3_BUFF:
            case 1002230:
            case 1002330:
            case 1002430:
            case 1002530:
            case 1002630:
            case 1002730:
            case 1002830:
            case 1002930:
            case 1003030:
            case 1003130:
            case 1003230:
            case 1003330:
            case 1003430:
            case 1003530:
            case 1003630:
            case 1003730:
            case 1003830:
            case 1003930:
            case 1004030:
            case 1004430:
                return new peronaSkill3Buff(skill);
            case getSkill.SKILL_MR2_1:
            case 1002110:
                return new mr2Skill1(skill);
            case getSkill.SKILL_MR2_2:
            case 1002120:
                return new mr2Skill2(skill);
            case getSkill.SKILL_MR2_2_DEBUFF:
            case 1002121:
                return new mr2Skill2Buff(skill);
            case getSkill.SKILL_MR2_3_BUFF:
            case 1002130:
                return new mr2Skill3Buff(skill);
            case getSkill.SKILL_ALVINE_1:
                return new alvineSkill1(skill);
            case getSkill.SKILL_ALVINE_1_DEBUFF:
                return new alvineSkill1Debuff(skill);
            case getSkill.SKILL_ALVINE_2:
                return new alvineSkill2(skill);
            case getSkill.SKILL_ALVINE_2_DEBUFF:
                return new alvineSkill2Debuff(skill);
            case getSkill.SKILL_ALVINE_3_BUFF:
                return new alvineSkill3Buff(skill);
            case getSkill.SKILL_NICOROBIN_1:
                return new nicorobinSkill1(skill);
            case getSkill.SKILL_NICOROBIN_1_DEBUFF:
                return new nicorobinSkill1Debuff(skill);
            case getSkill.SKILL_NICOROBIN_2:
            case 1002140:
                return new nicorobinSkill2(skill);
            case getSkill.SKILL_NICOROBIN_2_DEBUFF:
            case 1002141:
                return new nicorobinSkill2Debuff(skill);
            case getSkill.SKILL_NICOROBIN_3_BUFF:
            case 1002150:
            case 1002240:
            case 1002340:
            case 1002440:
            case 1002540:
            case 1002640:
            case 1002740:
            case 1002840:
            case 1002940:
            case 1003040:
            case 1003140:
            case 1003240:
            case 1003340:
            case 1003440:
            case 1003540:
            case 1003640:
            case 1003740:
            case 1003840:
            case 1003940:
            case 1004040:
            case 1004440:
                return new nicorobinSkill3Buff(skill);
            case getSkill.SKILL_ZORO_KID_1:
                return new zoroKidSkill1(skill);
            case getSkill.SKILL_ZORO_KID_1_DEBUFF:
                return new zoroKidSkill1Debuff(skill);
            case getSkill.SKILL_ZORO_KID_2:
                return new zoroKidSkill2(skill);
            case getSkill.SKILL_ZORO_KID_2_DEBUFF:
                return new zoroKidSkill2Debuff(skill);
            case getSkill.SKILL_ZORO_KID_3_BUFF:
            case 1002250:
            case 1002350:
            case 1002450:
            case 1002550:
            case 1002650:
            case 1002750:
            case 1002850:
            case 1002950:
            case 1003050:
            case 1003150:
            case 1003250:
            case 1003350:
            case 1003450:
            case 1003550:
            case 1003650:
            case 1003750:
            case 1003850:
            case 1003950:
            case 1004050:
            case 1004450:
                return new zoroKidSkill3Buff(skill);
            case getSkill.SKILL_HAI_QUAN_1:
                return new haiQuanSkill1(skill);
            case getSkill.SKILL_HAI_QUAN_1_DEBUFF:
                return new haiquanSkill1Debuff(skill);
            case getSkill.SKILL_HAI_QUAN_2:
                return new haiquanSkill2(skill);
            case getSkill.SKILL_HAI_QUAN_2_DEBUFF:
                return new haiquanSkill2Debuff(skill);
            case getSkill.SKILL_HAI_QUAN_3_BUFF:
            case 1002160:
            case 1002260:
            case 1002360:
            case 1002460:
            case 1002560:
            case 1002660:
            case 1002760:
            case 1002860:
            case 1002960:
            case 1003060:
            case 1003160:
            case 1003260:
            case 1003360:
            case 1003460:
            case 1003560:
            case 1003660:
            case 1003760:
            case 1003860:
            case 1003960:
            case 1004060:
            case 1004460:
                return new haiquanSkill3Buff(skill);
            case getSkill.SKILL_KID_1:
                return new kidSkill1(skill);
            case getSkill.SKILL_KID_1_DEBUFF:
                return new kidSkill1Debuff(skill);
            case getSkill.SKILL_KID_2:
                return new kidSkill2(skill);
            case getSkill.SKILL_KID_3_BUFF:
                return new kidSkill3Buff(skill);
            case getSkill.SKILL_CUU_THUONG_1:
                return new cuuThuongSkill1(skill);
            case getSkill.SKILL_CUU_THUONG_1_BUFF:
                return new cuuThuongSkill1Buff(skill);
            case getSkill.SKILL_CUU_THUONG_2:
                return new cuuThuongSkill2(skill);
            case getSkill.SKILL_CUU_THUONG_2_BUFF:
                return new cuuThuongSkill2Buff(skill);
            case getSkill.SKILL_CUU_THUONG_3_BUFF:
                return new cuuThuongSkill3Buff(skill);
            // case getSkill.SKILL_ARON_1:
            //     return new AaronSkill1(skill);
            // case getSkill.SKILL_ARON_1_DEBUFF:
            //     return new AaronSkill1Debuff(skill);
            // case getSkill.SKILL_ARON_2:
            //     return new AaronSkill2(skill);
            // case getSkill.SKILL_BEARMAN_1:
            //     return new BearmanSkill1(skill);
            // case getSkill.SKILL_BEARMAN_1_BUFF:
            //     return new BearmanSkill1Buff(skill);
            // case getSkill.SKILL_BEARMAN_2_BUFF:
            //     return new BearmanSkill2Buff(skill);
            default:
                console.log(`khong co skill ${id}`)
        }
    }
}

module.exports = Hero;
