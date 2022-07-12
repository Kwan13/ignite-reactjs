import { useState } from 'react';
import checkedIcon from '../../assets/checked.svg';
import trashIcon from '../../assets/trash.svg';

import styles from './Todo.module.css';

type Todo = {
  id: string;
  active: boolean;
  description: string;
}

interface TodoProps {
  todo: Todo;
  hasDeleteTodo(id: string): void;
  hasFinishedTodo(id: string): void;
}

export function TodoItem({ todo, hasDeleteTodo,hasFinishedTodo }: TodoProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckedButton() {
    setIsChecked(!isChecked);
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <button
          type='button'
          className={isChecked ? styles.active : styles.checkedButton}
          onClick={() => {
            handleCheckedButton()
            hasFinishedTodo(todo.id)
          }}
        >
          {isChecked && <img src={checkedIcon} />}
        </button>
        <p className={isChecked ? styles.todoFinished : ''}>
          {todo.description}
        </p>
      </div>

      <button
        type='button'
        className={styles.trashButton}
        onClick={() => hasDeleteTodo(todo.id)}
      >
        <img src={trashIcon} />
      </button>
    </div>
  )
}