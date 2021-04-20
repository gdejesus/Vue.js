const getRandomValue = function (min, max){
    return Math.floor(Math.random()*(max-min))+min;
}
const app = Vue.createApp({
    data() {    
      return { 
        monsterHealth:100,
        playerHealth:100,
        currentRound:0,
        winner: null,
        logMassages: []
      };
    },
    watch:{
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = "draw";
            }else if(value <= 0){
                this.winner = "player";
            }
        },
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = "draw";
            }else if(value <= 0){
                this.winner = "monster";
            }
        },
    },
    computed:{
        monsterBarStyles(){
            if(this.monsterHealth < 0)
                return {width:'0%'};
            return {width:this.monsterHealth + '%'};
        },
        playerBarStyles(){
            if(this.playerHealth < 0)
                return {width:'0%'};
            return {width:this.playerHealth + '%'};
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3;
        }
    },
    methods:{
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMassages= [];
        },
        attackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(5,12); 
            this.monsterHealth -= attackValue; 
            this.addLogMessage('player','attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandomValue(8,15); 
            this.playerHealth -= attackValue; 
            this.addLogMessage('monster','attack', attackValue);
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(10,25); 
            this.monsterHealth -= attackValue;
            this.addLogMessage('monster','special-attack', attackValue);
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            let healValue = getRandomValue(8,20); 
            if(this.playerHealth + healValue >100){
                this.playerHealth = 100;
            }else{
                this.playerHealth +=  healValue;
            }
            this.addLogMessage('player','heal', this.playerHealth);
        },
        surrender(){
            this.winner = "monster";
            this.addLogMessage('player','surrender', 0);
        },
        addLogMessage(who,what, value){
            this.logMassages.unshift({
                actionBy: who,
                actionType:what,
                actionValue: value
            });
        }
    }
  });
  
  app.mount('#game');