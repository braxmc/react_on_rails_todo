import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import TodoForm from './components/todos/TodoForm';
import axios from 'axios';
import TodoList from './components/todos/TodoList';

class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    // Grab all the todos from the db
    axios.get('/api/todos')
      .then( res => {
        // set the data to the state
        this.setState({ todos: res.data })
      })
      .catch( err => console.log(err))
  }

  addTodo = (todo) => {
    // add to the db
    axios.post('/api/todos', { todo })
      .then( res => {
        // add to the state
        const { todos } = this.state 
        this.setState({ todos: [...todos, res.data ]})
      }) 
      .catch( err => console.log(err))
  }

  updateTodo = (id, incommingTodo) => {
    // update to the db
    // update the todo in the state
  }

  deleteTodo = (id) => {
    // delete in the db
    // delete in the state
  }

  render() {
    const { todos } = this.state
    return(
      <Container>
        <Header>Todo List</Header>
        <TodoForm addTodo={this.addTodo} />
        <TodoList  todos={todos} />
      </Container>
    )
  }
}
export default App;