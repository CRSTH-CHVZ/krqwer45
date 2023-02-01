import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: false },
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
    const highestId = this.state.tasks.reduce( (prev, current) => (prev.id > current.id) ? prev : current );
    const newObject = {
      id: highestId.id + 1,
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
  handleClick = (currentTask) => {
    const { id } = currentTask;
    let newListTasks = this.state.tasks.map( (item) => {
      if( item.id === id){
        return{
          ...item,
          done: !item.done
        }
      } else {
        return {...item}
      }
    })
    this.setState( () => {
      return {
        tasks: newListTasks
      }
    })
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li key={task.id} onClick={ () => { this.handleClick(task) } } style={{textDecoration: task.done ? "line-through" : "none"}}>{task.name}</li>)}
          </ul>
          <form onSubmit={ this.addTask }>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter"
                   value={this.state.newTask}
                   onChange={ this.changeStr }
                   style={{ borderColor: this.state.newTask >= 0 ? 'red' : 'none'}}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
