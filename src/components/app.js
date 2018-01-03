class App {
  constructor() {
    this.tasks = new Tasks()
    
  }
}



var form = document.getElementById('new-task-form')


form.addEventListener('submit', addTask)

function addTask(e){
  e.preventDefault()
}