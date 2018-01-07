class Task {
  constructor(taskJSON) {
    this.name = taskJSON.name
    this.id = taskJSON.id
  }

  renderShow() {
    return `<h3>${this.name}</h3>`
  }

  render() {
    return `<li data-taskid='${this.id}' data-props='${JSON.stringify(
      this
    )}' class='task-element' ><p contenteditable="true" id="${this.id}">${
      this.name
  }</p></br><button data-action='edit-task' id="edit${this.id}">Update</button>  <i data-action='delete-task' class="em em-scream_cat" id="em"></i></li>`
  }
}