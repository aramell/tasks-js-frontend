class Tasks {
  constructor() {
    this.tasks = []
    this.initBindingsAndEventListeners()
    this.adapter = new TasksAdapter()
    this.fetchAndLoadTasks()
  }

  initBindingsAndEventListeners() {
    this.tasksForm = document.getElementById('new-task-form') //task form
    this.taskInput = document.getElementById('new-task-name') //name of task
    this.tasksNode = document.getElementById('tasks-container') // task list
    this.tasksForm.addEventListener('submit',this.handleAddtask.bind(this))
    this.tasksNode.addEventListener('click',this.handleDeletetask.bind(this))
  }

  fetchAndLoadTasks() {
    this.adapter.getTasks()
    .then( tasksJSON => tasksJSON.forEach( task => this.tasks.push( new Task(task) )))
      .then( this.render.bind(this) )
      .catch( (error) => console.log(error) )
  }

  handleAddtask() {
    event.preventDefault()
    const body = this.taskInput.value
    this.adapter.createtask(body)
    .then( (taskJSON) => this.tasks.push(new Task(taskJSON)) )
    .then(  this.render.bind(this) )
    .then( () => this.taskInput.value = '' )
  }

  handleDeletetask() {
    if (event.target.dataset.action === 'delete-task' && event.target.parentElement.classList.contains("task-element")) {
      const taskId = event.target.parentElement.dataset.taskId
      this.adapter.deletetask(taskId)
      .then( resp => this.removeDeletedtask(resp) )
    }
  }

  removeDeletedtask(deleteResponse) {
    debugger
    this.tasks = this.tasks.filter( task => task.id !== deleteResponse.taskId )
    this.render()
  }

  tasksHTML() {
      
    return this.tasks.map( task => task.render() ).join('')
  }

  render() {
    
    this.tasksNode.innerHTML = `<ul>${this.tasksHTML()}</ul>`
  }
}