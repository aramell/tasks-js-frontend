class App {
  constructor() {
    this.tasks = new Task()
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
  let form = document.getElementById('new-note-form')
  form.innerHTML = "<input type='text' name='newTask' id ='newTask'>" + "</br>" +"<input type='submit'>"  
}



var form = document.getElementById('new-note-form')


form.addEventListener('submit', addTask)

function addTask(e){
  e.preventDefault()
  // getting input value
  var container = document.querySelector('div.container')
  var newTask = document.getElementById('newTask').value
  // create new div and li
  var newDiv = document.createElement('div')
  newDiv.className = 'notes-container'
  container.appendChild(newDiv)
  var newLi = document.createElement('li')
  newLi.className = 'notes-list'
  newDiv.appendChild(newLi)

  newLi.appendChild(document.createTextNode(newTask))

 var field = document.getElementById('newTask').value=''
}