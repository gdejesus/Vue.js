const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            confirmUserInput: ""
        };
    },
    methods: {
        makeRandomString(length) {
            let result = '',
                characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            alert(result);
        },
        setParagraph(event) {
            this.userInput = event.target.value;
        },
        confirmParagraph(){
            this.confirmUserInput = this.userInput;
        }
    }
});

app.mount('#assignment');