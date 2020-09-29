import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Todo extends Component {
  
  
  render() {
    const { id, title, complete } = this.props
    return(
      <div>
        <Header style={ complete ? styles.complete : {} }>{title}</Header>
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