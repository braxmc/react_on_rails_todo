import React, { Component } from 'react';
import { Header, Modal, Button } from 'semantic-ui-react';
import TodoForm from './TodoForm';

class Todo extends Component {
  state = { editing: false }

  open = () => this.setState({ editing: true })
  close = () => this.setState({ editing: false })

  render() {
    const { id, title, complete, updateTodo, deleteTodo } = this.props 
    const { editing } = this.state 
    return(
      <div>
        <Header style={ complete ? styles.complete : {} }>
          {title}
        </Header>
        <Modal
          onOpen={() => this.open()}
          open={editing}
          trigger={<Button>Edit</Button>}
        >
          <Modal.Content>
            <TodoForm 
              updateTodo={updateTodo}
              close={this.close}
              id={id}
              title={title}
              complete={complete}
            />
          </Modal.Content>
        </Modal>
        <Button color='red' onClick={() => deleteTodo(id)}>Delete</Button>
      </div>
    )
  }
}

const styles = { 
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  }
}

export default Todo;