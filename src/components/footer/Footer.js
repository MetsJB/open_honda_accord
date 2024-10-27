import styles from './footer.module.css'

const Footer = () => {
  return (
  <footer className={styles.footer}>
    <div className={styles.footer__frame}>
      <ul>
        <a>О нас</a>
        <a>Отзывы</a>
        <a>Полезная информация</a>
      </ul>
      <p>© Все права защищены</p>
    </div>
    </footer>
)
}

export default Footer
