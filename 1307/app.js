function getRandomValue(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMess: []
        }
    },
    computed: {
        monsterBarStyles() {
            return {
                width: this.monsterHealth + '%',
                background: 30 > this.monsterHealth ? 'red' : '#00a876'
            }
        },
        playerBarStyles() {
            return {
                width: this.playerHealth + '%',
                background: 30 > this.playerHealth ? 'red' : '#00a876'
            }
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                //A draw
                this.winner = 'draw';
            } else if (value <= 0) {
                //Player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                //A draw
                this.winner = 'draw';

            } else if (value <= 0) {
                //monster lost
                this.winner = 'player';
            }
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMess = [];
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(12,5);
            this.monsterHealth -= attackValue;
            this.monsterHealth = this.monsterHealth < 0 ? 0 : this.monsterHealth;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(15,8);
            this.playerHealth -= attackValue;
            this.playerHealth = this.playerHealth < 0 ? 0 : this.playerHealth;
            this.addLogMessage('monster', 'attack', attackValue);
            
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(25, 10);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'special attack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            const healValue = getRandomValue(20,8);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
            this.playerHealth = 0;
        },
        addLogMessage(who, what, value) {
            this.logMess.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});

app.mount('#game');