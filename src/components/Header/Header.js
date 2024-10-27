import React from "react"
import { Link } from "react-router-dom"
import styles from "./header.module.css"
import MLC from "./android-chrome-512x512.png"

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={MLC} />
      <div className={styles.header_anchor}>
        <a>Главная</a>
        <a>Фото</a>
        <a>Узлы и агрегаты</a>
        <a>Комментарии</a>
      </div>
    </header>
  )
}

export default Header
