const app = Vue.createApp({
    data() {
        return {
            number: 0           
        };
    },
    watch:{
        result(){        
            const that = this;    
            setTimeout(function(){
                that.number = 0;
            },5000)
        },        
    },
    computed:{
        result() {
            return this.number < 37?'Not there yet!':this.number === 37? this.number :'Too much!';
          }
    },
    methods: {
        addNumber(number) {
            this.number += number;
        }
    }
});

app.mount('#assignment');