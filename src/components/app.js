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
  form.innerHTML = "<input type='text' name='newTask'>" + "</br>" +"<input type='submit'>"  
}



var form = document.getElementById('new-note-form')

var itemList = document.querySelector('#notes-container')

form.addEventListener('submit', addTask)

function addTask(e){
  e.preventDefault()
  console.log(1)

  // getting input value
  var newItem = document.getElement 
}