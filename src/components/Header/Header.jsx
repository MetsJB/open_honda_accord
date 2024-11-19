import React from "react"
import { Link } from "react-router-dom"
import styles from "./header.module.css"
import MLC from "./android-chrome-512x512.png"

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={MLC} />
      <div className={styles.header_anchor}>
        <Link to="/">Главная</Link>
        <Link to="/photo">Фото</Link>
        <div className={styles.nodes_trigger}>
          Узлы и агрегаты ▾
          <ul className={styles.nodes}>
            <div className={styles.nodes__wrapper}>
              <Link to='/engine' className={styles.nodes_anchor}>Двигатель</Link>
              <Link className={styles.nodes_anchor}>Кузов</Link>
              <Link className={styles.nodes_anchor}>Подвеска</Link>
              <Link className={styles.nodes_anchor}>Салон</Link>
            </div>
          </ul>
        </div>

        <a>Комментарии</a>
      </div>
    </header>
  )
}

export default Header
