import { useEffect, useState } from 'react';
import './App.css';
import AddTodoItem from './component/add-todo-item';
import { saveTodo, getTodo, deleteTodo } from './services/api-services';
import Cards from './component/todo-card';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodo().then((data) => {
      setTodos(data);
    });
  }, []);

  const addTodo = (todo) => {
    saveTodo(todo);
    getTodo().then((data) => {
      setTodos(data);
    });
  }

  return (
    <div>
      <AddTodoItem addTodo={addTodo} />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
       {todos.map((todo,index)=>(
          <Cards key={index} todo={todo} />
       ))}
      </div>
    </div>
  );
}

export default App;
