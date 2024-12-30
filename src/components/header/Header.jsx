import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import style from "./header.module.css"
import honda_label from "./honda_label.svg"
import ModalWindow from "../modalWindow/ModalWindow"

const Header = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false)
  const [modalActive, setModalActive] = useState(false)

  if (modalActive) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = ""
  }

  return (
    <>
      <header className={style.header}>
        <img src={honda_label} />
        <div className={style.header_anchor}>
          <Link to=".">Главная</Link>
          <Link to="photo">Фото</Link>
          <div
            className={style.nodes_trigger}
            onMouseEnter={() => {
              setDropDownMenu(true)
            }}
            onMouseLeave={() => {
              setDropDownMenu(false)
            }}
          >
            Узлы и агрегаты ▾
            <ul
              className={`${style.nodes} ${
                dropDownMenu ? style.dropDownMenu : style.hidden
              }`}
            >
              <div className={style.dummy} />
              <div className={style.nodes__wrapper}>
                <Link
                  to="engine"
                  className={style.nodes_anchor}
                  onClick={() => {
                    setDropDownMenu(false)
                  }}
                >
                  Двигатель
                </Link>
                <Link
                  to="carbody"
                  className={style.nodes_anchor}
                  onClick={() => {
                    setDropDownMenu(false)
                  }}
                >
                  Кузов
                </Link>
                <Link
                  to="pendant"
                  className={style.nodes_anchor}
                  onClick={() => {
                    setDropDownMenu(false)
                  }}
                >
                  Подвеска
                </Link>
                <Link
                  to="interior"
                  className={style.nodes_anchor}
                  onClick={() => {
                    setDropDownMenu(false)
                  }}
                >
                  Салон
                </Link>
              </div>
            </ul>
          </div>
          <div className={style.line} />
          <div className={style.reviews_block}>
            <Link to="reviews">Отзывы</Link>
            <button
              onClick={() => {
                setModalActive(true)
              }}
            >
              {" "}
              Оставить отзыв
            </button>
          </div>
        </div>
      </header>
      <ModalWindow modalActive={modalActive} setModalActive={setModalActive} />
    </>
  )
}

export default Header
