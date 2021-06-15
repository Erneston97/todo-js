import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList=new TodoList();

todoList.todos.forEach(todo => { crearTodoHtml(todo)    

});

// const newTodo = new Todo('Aprender Javascript');
// todoList.nuevoTodo(newTodo);

// todoList.todos[0].imprimirClase();

console.log('todos',todoList.todos);
// const tarea=new Todo('Aprender Javascritp');
// todoList.nuevoTodo(tarea);


// console.log( todoList );
// crearTodoHtml(tarea);

// localStorage.setItem('mi-key','ABC123');