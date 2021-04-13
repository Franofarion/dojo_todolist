import './App.css';
import TodoList from './components/TodoList';

/**
# Dojo React 1 - State

Create a React Todo List using useState

1) Create a React Application with create-react-app

2) Create a 'components' folder with 2 components: TodoList, Todo

3) In the TodoList component : 
    - Should have a title "Todos"
    - you should have an empty array of todos (data structure of a todo : `{id: 1, name: '', done: false}` ), // l'id doit s'incrémenter pour chaque Todo
    - a input text, a button, when you click the button a new Todo is created and the input text is cleared
    - you have to loop on the todolist to display every todo (hint: use map on the Todo component)

4) In the Todo component : 
    - use props to display name, status of done / undone, and pass 2 functions `toggleDone` & `deleteTodo`
    - display the name of the Todo
    - a checkbox to done or undone the Todo (function that called a function in the parent Component : Todolist)
    - a delete button to delete the Todo (function that called a function in the parent Component : Todolist)
 */

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
