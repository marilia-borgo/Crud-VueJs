var app = new Vue({
  el: "#app",
  data: {
    tasks: [],
    task: {
      "id": '',
      "title":'',
      "dueTo": '',
      "project": '',
      "usuario": '',
      isShow:false,
    },
 
  },
  methods: {
    showEdit(id){
     let elemento =  this.tasks.map(element => {
      if(element.id === id){
        element.isShow = true
        
      }
      })
      
      
    },

    updateTasks(id){
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.task)
      };
      fetch(`http://localhost:3000/tasks/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => (this.updatedAt = data.updatedAt));
    },
    getTasks() {
      fetch("http://localhost:3000/tasks")
        .then((response) => response.json())
        .then((tarefasJson) => {
          console.log(tarefasJson);
          this.tasks = tarefasJson;
        });
    },
    post(){
      const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.task)
    };
    fetch("http://localhost:3000/tasks", requestOptions)
      .then(response => response.json())
      .then(data => (this.postId = data.id));
  },
    deleteTask(id){
      const requestOptions = {
        method: "DELETE",
      };
      fetch(`http://localhost:3000/tasks/${id}`, requestOptions);
  },
  fullInputs(task){
    this.task = task
  }
  },
  created() {
    
    // console.log("created");
    this.getTasks();
  },
  mounted() {
    // console.log("montend");

 
  },
});