import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

var todos = [
  {
    todoTitle: 'My first todo',
    todoResponsible: 'Vivek Neel',
    todoDescription: 'first todo description',
    todoPriority: 'low'
  }, {
    todoTitle: 'My Second todo',
    todoResponsible: 'Vivek Neel Two',
    todoDescription: 'Two todo description',
    todoPriority: 'medium'
  }, {
    todoTitle: 'My Three todo',
    todoResponsible: 'Vivek Neel Three',
    todoDescription: 'Three todo description',
    todoPriority: 'hidh'
  }
]

class TodoComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      todoTitle: '',
      todoDescription: '',
      todoResponsible: '',
      todoPriority: 'lower'
    }

    this.handleInputChange = this
      .handleInputChange
      .bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let newState = {}
    newState[name] = value

    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h4>Add a new note
        </h4>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">Todo</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                id="inputTodoTitle"
                name="todoTitle"
                value={this.state.todoTitle}
                placeholder="Title"
                onChange={this.handleInputChange}></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">Responsible
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                id="inputTodoResponsible"
                name="todoResponsible"
                value={this.state.todoResponsible}
                placeholder="Responsible"
                onChange={this.handleInputChange}></input>
            </div>

          </div>

          < div className="form-group">
            <label htmlFor="inputTodoDesc" className="col-sm-2 control-label">Description
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                type="text"
                rows="3"
                id="inputTodoDesc"
                name="todoDescription"
                value={this.state.todoDescription}
                placeholder="Description"
                onChange={this.handleInputChange}></textarea>
            </div>
          </div >

          < div className="form-group">
            <label htmlFor="inputTodoPriority" className="col-sm-2 control-label">Priority
            </label>
            < div className="col-sm-10">
              <select
                className="form-control"
                type="text"
                id="inputTodoPriority"
                name="todoPriority"
                value={this.state.todoPriority}
                placeholder="Priority"
                onChange={this.handleInputChange}>
                <option>Lowest
                </option>
                < option >
                  Medium
                </option>
                < option >
                  High
                </option>
              </select>
            </div>

          </div >

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success">Add Todo</button>

            </div>

          </div>
        </form>
      </div>
    );
  }
}
class App extends Component { // set the initial state

  constructor(props) {
    super(props);

    this.state = {
      todos
    }

  }

  itemRemoved(index) {
    if (window.confirm('swami')) {
      this.setState({
        todos: this
          .state
          .todos
          .filter(function (e, i) {
            return i !== index
          })
      })
    }
  }
  render() {
    return (
      <div className="container">
        <TodoComponent></TodoComponent>
        <hr/>
        <h4>Todo count :
          <span className="badge">{this.state.todos.length}</span>
        </h4>
        < ol className="list-group">
          {this
            .state
            .todos
            .map((todo, index) => <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle}
                <small>
                  <span className="label label-info">{todo.todoPriority}
                  </span>
                </small>
              </h4>
              <p>
                <span className="glyphicon glyphicon-user">{todo.todoResponsible}</span>
              </p>
              <p>{todo.todoDescription}</p>
              <button
                className="btn btn-danger btn-sm"
                onClick={this
                .itemRemoved
                .bind(this, index)}>
                <span className="glyphicon glyphicon-trash"></span>
                Delete
              </button>
              <text>Vivek</text>
            </li>)}
        </ol>
      </div>
    )
  }
}

export default App
