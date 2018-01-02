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
      body: JSON.stringify({ name }) //previously was body - not sure if this should be name or not
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
  
}