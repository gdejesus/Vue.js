const app = Vue.createApp({
    data() { //function full of data
        return {
            courseGoal: 'Finish the course and learn Vue!',
            courseGoalA: '<h2>Finish the course and learn Vue!<h2>',
            courseGoalB: '<h2>Master Vue and build amazing apps!!</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: { //object full of methods
        outputGoal() {
            const randomNumber = Math.random();
            return randomNumber < 0.5 ? 'Learn Vue!' : 'Master Vue!';
        },
        outputGoalAB() {
            const randomNumber = Math.random();
            return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
        }
    }
});

app.mount('#user-goal');