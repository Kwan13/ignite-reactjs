import clipboardIcon from '../../assets/clipboard.svg';

import styles from './EmptyList.module.css';

export function EmptyList() {
  return (
    <div className={styles.container}>
      <img src={clipboardIcon} alt="icone de prancheta" />
      <div className={styles.textContent}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}