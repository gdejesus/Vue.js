const app = Vue.createApp({
    data() {    
      return { 
        enteredTaskValue:'',
        tasks :[],
        listIsVisible: true
      };
    },
    methods:{
      addTask(){
        this.tasks.push(this.enteredTaskValue);
        this.enteredTaskValue = "";
      },
      toggleTaskList(){
          this.listIsVisible = !this.listIsVisible;
      }
    }
  });
  
  app.mount('#assignment');