class App {
  constructor() {
    this.tasks = new Tasks()
  }
}
// var click = document.getElementById('new-note-form')

// window.onload = function newForm(){
//   let form = document.getElementById('new-note-form')
//   // debugger
// }
// // document.getElementById('new-note-form').appendChild('test')
//   let form = document.querySelector("form")
  
//   form.addEventListener('submit', function(e){
//     e.preventDefault()
//   })
//   debugger
//   console.log()



window.onload = function newForm(){
  let form = document.getElementById('new-task-form')
  form.innerHTML = "<input type='text' name='newTask' id ='newTask'>" + "</br>" +"<input type='submit'>"  
 
  var container = document.querySelector('div.container')
  // var newTask = document.getElementById('newTask').value
  var newDiv = document.createElement('div')
  newDiv.className = 'tasks-container'
  
  container.appendChild(newDiv)
  debugger
  var newLi = document.createElement('li')
  newLi.className = 'notes-list'
  newDiv.appendChild(newLi)
}



var form = document.getElementById('new-task-form')


form.addEventListener('submit', addTask)

function addTask(e){
  e.preventDefault()
  // getting input value
  // var container = document.querySelector('div.container')
  // var newTask = document.getElementById('newTask').value
  // create new div and li
  // var newDiv = document.createElement('div')
  // newDiv.className = 'tasks-container'
  // container.appendChild(newDiv)
  // var newLi = document.createElement('li')
  // newLi.className = 'notes-list'
  // newDiv.appendChild(newLi)

//   newLi.appendChild(document.createTextNode(newTask))

//  var field = document.getElementById('newTask').value=''
}