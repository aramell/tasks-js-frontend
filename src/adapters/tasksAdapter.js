class TasksAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/tasks"
  }

  getTasks() {
    
    return fetch(this.baseUrl)
    .then(res => res.json())
    
  }

  createTask(name) {
    if (name === ""){
    alert("field cannot be blank")
    return false}
  
    const taskCreateParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    }
    return fetch(this.baseUrl, taskCreateParams).then(res => res.json())
  }

  deletetask(taskId) {
    const taskDeleteParams = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }
     
    return fetch(`${this.baseUrl}/${taskId}`, taskDeleteParams).then(res =>
      res.json()
    )
  }
  editTask(taskId, newTask){
    
    const taskEditParams = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: newTask })
 
    }
    
    return fetch(`${this.baseUrl}/${taskId}`, taskEditParams).then(res=> 
    res.json())
    
    
  }
  editTaskForm(taskId){
    var button = document.getElementById('edit' + taskId)
    var edit =  document.getElementById(taskId)
      edit.contentEditable = 'true'
      edit.focus()
      button.innerText = "Save"

    button.onclick = function(){
      if (button.innerText === 'Save'){
        var newTask 
     }
    } 
  }
  

}

    
  
