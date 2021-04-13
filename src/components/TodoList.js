import React, {useState} from "react"
import Todo from './Todo';

/**
 * 3) In the TodoList component : 
    - Should have a title "todoList"
    - you should have an empty array of todoList (data structure of a todo : `{id: 1, name: '', done: false}` ), // l'id doit s'incrémenter pour chaque Todo
    - a input text, a button, when you click the button a new Todo is created and the input text is cleared
    - you have to loop on the todolist to display every todo (hint: use map on the Todo component)
 */



export default function TodoList () {
    // {id: 1, name: '', done: false}
    const [todoList, setTodoList] = useState([]);
    const [idIncrement, setIdIncrement] = useState(0);

    const [inputValue, setInputValue] = useState("");

     const onAddTodo = () => {
        // Je créé mon nouvel objet Todo
        const newTodo = {id: idIncrement, name: inputValue, done: false};
        // Je l'ajoute dans mon tableau d'état todoList (sans utiliser le push)
        setTodoList([...todoList, newTodo]);
        // Je reset la valeur de mon input
        setInputValue('');
        // J'incrémente mon id pour que chaque todo ait un id différent
        setIdIncrement(idIncrement + 1);   
    }

    const toggleDone = (id) => {
        const tempTodoList = todoList.map((todo) => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }
            return todo;
        });
        setTodoList(tempTodoList);
    }

    const deleteTodo = (id) => {
        const tempTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(tempTodoList);
    }

    return (
        <div>
            <h1>Todo list ! ({todoList.length})</h1>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <label htmlFor="todo">Todo name</label>
                <input id="todo" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={onAddTodo}>+</button>
            </div>
            <div>
                {todoList.map((todo) => {
                    return (<Todo
                                key={todo.id} 
                                id={todo.id}
                                name={todo.name}
                                done={todo.done}
                                toggleDone={toggleDone}
                                deleteTodo={deleteTodo}
                            />);
                })}
            </div>
        </div>
    )
}