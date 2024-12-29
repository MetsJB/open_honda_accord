import { createPortal } from "react-dom"
import { FaUser, FaEdit, FaPlus } from "react-icons/fa"
import { useState } from "react"
import handlePopupMessage from "../../utils/handlePopupMessage"
import style from "./modalWindow.module.css"

const modalWindow = document.getElementById("modalWindow")

const ModalWindow = ({ modalActive, setModalActive }) => {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  async function submitForm(e) {
    e.preventDefault()

    await fetch("http://localhost:4000/api/post-comment", {
      method: "POST",
      body: JSON.stringify({ name, message }),
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
    })
      .then((responce) => responce.text())
      .then((data) => {
        if (data === "No change") {
          handlePopupMessage(name, "вы уже оставили такое сообщение!")
          setMessage("")
        } else {
          handlePopupMessage(name, "ваше сообщение отправлено!")
          setMessage("")
          setName("")
        }
      })
      .catch((e) =>
        handlePopupMessage(
          "Сообщение не отправлено",
          "отсутствует связь с сервером"
        )
      )
  }

  return createPortal(
    <div
      className={`${style.frame} ${modalActive ? style.active : ""}`}
      onClick={() => {
        setModalActive(false)
      }}
    >
      <div
        className={`${style.container} ${
          modalActive ? style.activeContent : ""
        }`}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <form
          onSubmit={submitForm}
          autoComplete="off"
          method="post"
          className={style.wrapper}
        >
          <p className={style.title}>Обратная связь</p>
          <img
            src={require("./../../images/фонОбратнаяСвязь.jpg")}
            className={style.imageBackground}
          />
          <fieldset className={style.wrapperName}>
            <input
              value={name}
              onChange={(event) => {
                setName(event.target.value)
              }}
              alt="Введите имя"
              placeholder="Имя..."
              id="name"
              required={true}
              className={style.inputName}
            />
            <label htmlFor="name">
              <FaUser id="name" className={style.userIcon} />
            </label>
          </fieldset>
          <fieldset className={style.wrapperMessage}>
            <textarea
              value={message}
              onChange={(event) => {
                setMessage(event.target.value)
              }}
              required={true}
              alt="Введите сообщение"
              placeholder="Сообщение..."
              id="message"
              className={style.textareaMessage}
            />
            <label htmlFor="message">
              <FaEdit id="message" className={style.messageIcon} />
            </label>
          </fieldset>
          <button
            type="submit"
            onClick={
              name && message
                ? () => {
                    setModalActive(false)
                  }
                : null
            }
            className={style.buttonSubmit}
          >
            Отправить
          </button>
        </form>
      </div>
      <FaPlus className={style.close} />
    </div>,
    modalWindow
  )
}

export default ModalWindow
