const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            lastName: "",
            confirmedName: ""
        };
    },
    watch:{
        counter(value){
            if(value>50)
                this.counter= 0;
        },
        /*name(value){
            this.fullName = value === ""?" ":value +" "+this.lastName;
        },
        lastName(value){
            this.fullName = value === ""?" ":this.name +" " +value;
        }*/
    },
    computed:{
        fullName(){
            console.log("Again");
            return this.name==="" || this.lastName?" ": this.name + " "+ this.lastName;
        }
    },
    methods: {
        add(number) {
            this.counter += number;
        },
        reduce(number) {
            this.counter -= number;
        },
        setName(event, lastName) {
            this.name = event.target.value;
        },
        resetName() {
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