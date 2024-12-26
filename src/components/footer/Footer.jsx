import { ToastContainer } from "react-toastify"

import handlePopupMessage from "../../utils/handlePopupMessage"
import styles from "./footer.module.css"

const Footer = () => {
  const message = "Спасибо, что нажали на кнопку "

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__frame}>
        <ul>
          <a onClick={(e) => handlePopupMessage(message, e.target.innerText)}>
            О нас
          </a>
          <a onClick={(e) => handlePopupMessage(message, e.target.innerText)}>
            Комментарии
          </a>
          <a onClick={(e) => handlePopupMessage(message, e.target.innerText)}>
            Полезная информация
          </a>
        </ul>
        <p>© Все права защищены</p>
      </div>
      
    </footer>
  )
}

export default Footer
