import { FaUser, FaEdit } from "react-icons/fa"
import style from "./reviews.module.css"
import { VscFeedback } from "react-icons/vsc"
import ModalWindow from "../modalWindow/ModalWindow"
import { useEffect, useState, version } from "react"
import handlePopupMessage from "../../utils/handlePopupMessage"

const Reviews = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/api/reviews")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setComments(data)
      })
      .catch((err) => {
        console.log(err)
      })

    subscribe()
  }, [])

  const subscribe = async () => {
    const eventSource = new EventSource("http://localhost:4000/api/connect")
    eventSource.onmessage = (event) => {
      const message = JSON.parse(event.data)
      setComments(message)
    }
  }

  return (
    <>
      <section className={style.container}>
        <h1>Отзывы</h1>
        <div className={style.description}>
          Здесь будут находится Ваши отзывы о данном сайте,{" "}
          <p>для меня очень важна обратная связь!</p> <br />
          <div className={style.wrapperFeedBack}>
            <VscFeedback className={style.feedBack} />
            <div className={` ${style.dot} ${style.dotOne}`} />
            <div className={` ${style.dot} ${style.dotTwo}`} />
            <div className={` ${style.dot} ${style.dotThree}`} />
          </div>
        </div>
        <div className={style.leaveFeedBack}>
          Чтобы оставить отзыв, нажмите на кнопку в правом верхнем углу
          "Оставить отзыв".
        </div>

        <div className={style.reviews}>
          {comments.length === 0 ? (
            <p className={style.zeroComment}>
              Вы можете быть первым, кто оставит отзыв!
            </p>
          ) : (
            <ul className={style.listComment}>
              {comments.map((item, index) => (
                <li className={style.itemComment} key={index}>
                  <p className={style.indexNumber} id={item.id}>
                    {++index}.
                  </p>
                  <div className={style.comment}>
                    <p className={style.nameComment}>{item.name}</p>
                    {item.message}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}

export default Reviews
