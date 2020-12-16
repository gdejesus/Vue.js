const app = Vue.createApp({
    data() { //function full of data
        return {
            name: 'Guille De Jesus',
            age: 32,
            imgUrl: 'https://quantumdevop.com/wp-content/uploads/2019/04/vue-logo-1-740x414.png'
        };
    },
    methods: { //object full of methods
        agePlusfive() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');