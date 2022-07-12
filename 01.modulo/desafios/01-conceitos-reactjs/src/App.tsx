import { v4 as uuid } from 'uuid';

import logoImg from './assets/logo.svg';
import plusIcon from './assets/plus.svg';

import { EmptyList } from './components/EmptyList';
import { TodoItem } from './components/TodoItem';

import styles from './App.module.css';
import { useState } from 'react';

interface Todo {
  id: string;
  active: boolean;
  description: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');

  function handleAddTodo() {
    if (inputText.length > 0) {
      const todo = {
        id: uuid(),
        active: true,
        description: inputText
      }
  
      setTodos(oldState => [...oldState, todo]);
      setInputText('');
    }
  }

  function handleDeleteTodo(id: string) {
    const todosWithoutDeleteOne = todos.filter(todo => todo.id !== id)
    setTodos(todosWithoutDeleteOne)
  }

  function handleFinishedTodo(id: string) {
    const finishedTodo = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          active: !todo.active
        }
      }

      return todo;
    });

    setTodos(finishedTodo);
  }

  const finishedTodo = todos.filter(todo => todo.active === false)

  return (
    <>
      <header className={styles.header}>
        <img src={logoImg} alt="todo" />
      </header>

      <div className={styles.content}>
        <div className={styles.newTodoContainer}>
          <input
            type="text"
            placeholder='Adicione uma nova tarefa'
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />
          <button type='button' onClick={handleAddTodo}>
            Criar
            <img src={plusIcon} alt="icone de mais" />
          </button>
        </div>

        <main className={styles.todoList}>
          <div className={styles.todoListCount}>
            <p className={styles.todosCreated}>
              Tarefas criadas<span>{todos.length}</span>
            </p>
            <p className={styles.todosFinished}>
              Concluídas<span>{finishedTodo.length} de {todos.length}</span>
            </p>
          </div>

          {todos.length <= 0 && <EmptyList />}

          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              hasDeleteTodo={handleDeleteTodo}
              hasFinishedTodo={handleFinishedTodo}
            />
          ))}
        </main>
      </div>

    </>
  )
}

export default App;
