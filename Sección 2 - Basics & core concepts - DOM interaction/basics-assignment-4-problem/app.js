const app = Vue.createApp({
    data(){
        return {
            inputClass:"",
            showParagraph:true,
            inputBackgroundColor: ''
        }
    },
    computed:{
        pClass(){
            return [this.inputClass,{                
                visible:this.showParagraph,
                hidden:!this.showParagraph
            }];
        },
    },
    methods:{
        switchVisibility(){
            this.showParagraph = !this.showParagraph;
        }
    }
});

app.mount("#assignment");
