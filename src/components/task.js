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
    )}' class='task-element'><a class="show-link" href='#'>${
      this.name
    }</a> <button data-action='edit-task'>Edit</button> <i data-action='delete-task' class="em em-scream_cat"></i></li>`
  }
}