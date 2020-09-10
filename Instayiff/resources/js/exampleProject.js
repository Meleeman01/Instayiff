

//main 
import React from 'react';
import TodoItem from './ToDoItem';
import todosData from './jokeData.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed =! todo.completed;
                }
                return todo;
            });
            return {
                todos: updatedTodos
            };
        });
        console.log('changed '+id);
    }
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>);
        return (
            <div>
                {todoItems}
            </div>
        );
        
    }
}

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count:0
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(prevState => {
//             return {
//                 count:prevState.count + 1
//             };
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Change!</button>
//             </div>
//         );
//     }
// }



export default App;