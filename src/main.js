const CardBattleLib = require('./CardBattleLib');

class main {
    constructor() {
        this.cardBattleLib = null;
    }

    start(){
        this.cardBattleLib = new CardBattleLib();
        this.cardBattleLib.init();
    }

    restart(){
        this.cardBattleLib = new CardBattleLib();
        this.cardBattleLib.init();
    }
}

const demo = new main();
demo.start();