import styles from '../Styles/Button.module.css'

export default function Button({ text }) {
  return <button className={styles.button}>{text}</button>
}
