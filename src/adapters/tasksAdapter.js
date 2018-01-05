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
  editTask(taskId){
    
    const taskEditParams = {
      method: "update",
      headers: {
        "Content-Type": "application/json"
      }
    }
    return fetch(`${this.baseUrl}/${taskId}`, taskEditParams).then(res=> 
    res.json())
    
  }
  editTaskForm(taskId){

  var edit =  document.getElementById(taskId)
    edit.contentEditable = 'true'
    edit.focus()
    // var textarea = document.getElementById(taskId)
    
    var button = document.getElementById('edit' + taskId)
    button.innerHTML = 'save'
    // textarea.dataset = `${taskId}`
    // textarea.appendChild(input)

    //  var button = '<input id="' + obj.id + '_save" type="button" value="SAVE" /> OR 
    //       <input id="' + obj.id + '_cancel" type="button" value="CANCEL" /></div>';

    // var li = document.getElementById(`${taskId}`)
    // li.innerHTML += textarea
    //  Event.observe(obj.id+'_save', 'click', function(){saveChanges(obj)}, false);
    //  Event.observe(obj.id+'_cancel', 'click', function(){cleanUp(obj)}, false);
    // task.setAttribute("contentEditable", true).focus()
   
     
    }


    
  
}