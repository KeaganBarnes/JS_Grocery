import React, {Component} from 'react';
import List from './List';
import GroceryForm from './GroceryForm';

class App extends Component {
  state = {
    groceries: [
      { id: 1, name: "Milk", complete: true },
      { id: 2, name: "Eggs", complete: false },
      { id: 3, name: "Bread", complete: false },
    ]
  }

  addItem(name) {    
    const todo = { 
      id: this.state.todos[this.state.todos.length - 1].id + 1, 
      name, 
      complete: false, 
    };    
    this.setState({ todos: [...this.state.todos, todo] });
  };

  render() {
    const {groceries} = this.state;

    return (
      <div>
        <GroceryForm addItem={this.addItem} />
        <List name="Grocery List" items={groceries} />
      </div>
    )
  }
}

export default App;
