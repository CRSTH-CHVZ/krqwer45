import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: ''
    }

    this.updateValue = this.updateValue.bind(this)
    this.addTask = this.addTask.bind(this)
    this.markDone = this.markDone.bind(this)
  }

  updateValue(e) {
    this.setState({
      newTask: e.target.value
    })
  }

  addTask(e) {
    const objID = this.state.tasks.length + 1
    let inputText = document.getElementById('new-task')

    if (this.state.newTask.length !== 0) {
      this.setState({
        tasks: this.state.tasks.concat({id: objID, name: this.state.newTask, done: false}),
        newTask: ""
      })
    }

    e.preventDefault()
  }

  markDone(e) {
    this.setState({
      tasks: this.state.tasks.map(task =>
          e.target.id == task.id ? task.done ? { id: task.id, name: task.name, done: false } : { id: task.id, name: task.name, done: true } : task
      )
    })
  }

  render() {
    return (
        <div className="wrapper">
          <div className="list">
            <h3>Por hacer:</h3>
            <ul className="todo">
              {this.state.tasks.map((task, index) => <li key={task.id} id={task.id} className={ task.done ? 'done' : '' } onClick={this.markDone}>{task.name}</li>)}
            </ul>
            <form onSubmit={this.addTask}>
              <input type="text" id="new-task" className={this.state.newTask.length === 0 ? 'error' : ''} onChange={this.updateValue} placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} />
            </form>
          </div>
        </div>
    )
  }
}

export default App;