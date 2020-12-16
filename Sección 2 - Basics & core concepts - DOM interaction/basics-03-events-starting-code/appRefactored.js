const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            confirmedName: ""
        };
    },
    methods: {
        add(number) {
            this.counter += number;
        },
        reduce(number) {
            this.counter -= number;
        },
        setName(event, lastName) {
            this.name = event.target.value + " " + lastName;
        },
        resetName(event, lastName) {
            this.name = "";
        },
        submitForm(event) {
            event.preventDefault();
            alert('Submitted!');
        },
        submitFormModifier(event) {
            alert('Submitted!');
        },
        confirmName() {
            this.confirmedName = this.name;
        }
    }
});

app.mount('#events');