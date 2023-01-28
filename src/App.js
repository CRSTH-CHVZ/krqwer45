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
  }
  changeStr = (e) => {
    const newString = e.target.value;
    this.setState( () => {
      return{ newTask: newString}
    })
  }
  addTask= (e) => {
    e.preventDefault();
    if( this.state.newTask === ''){
      alert('Necesitas escribir algo');
      return
    }
    const newObject = {
      id: 99,
      name: this.state.newTask,
      done: false
    }
    const previousTaks = this.state.tasks;
    this.setState( (state) => {
      return {
        tasks: [ ...previousTaks, newObject ],
        newTask: ''
      }
    })
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li key={task.id}>{task.name}</li>)}
          </ul>
          <form onSubmit={ this.addTask }>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter"
                   value={this.state.newTask}
                   onChange={ this.changeStr }
            />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
