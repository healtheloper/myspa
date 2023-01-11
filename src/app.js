/** @jsx createElement */
import { createElement } from './core.js';
import Todos from './components/todos.js';
import Button from './components/button.js';

const App = () => {
  const handleButtonClick = () => {
    const input = document.querySelector('input');
    const todos = document.querySelector('ul');
    const newTodo = document.createElement('li');
    newTodo.innerHTML = input.value;
    todos.appendChild(newTodo);
  };

  return (
    <div id='app'>
      <h1>Hello World</h1>
      <Todos />
      <input />
      <Button onClick={handleButtonClick}>Add</Button>
    </div>
  );
};

export default App;
