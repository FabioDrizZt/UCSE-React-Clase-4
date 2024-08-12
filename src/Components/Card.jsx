import Button from './Button'
import styles from '../Styles/Card.module.css'

export default function Card({ title, content, buttonText }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
      <Button text={buttonText} />
    </div>
  )
}
