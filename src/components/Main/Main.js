import { Link } from "react-router-dom"
import { useState, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import styles from "./main.module.css"

const Main = () => {
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    gsap.fromTo(
      ".nodes",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".nodes",
          start: "-50% 90%",
          end: "top 15%",
          scrub: true,
        },
      }
    )
    gsap.fromTo(
      `.${styles.text}`,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: `.${styles.text}`,
          start: "top 98%",
          end: "bottom 88%",
          scrub: true,
        },
      }
    )
    gsap.fromTo(
      `.${styles.layers}`,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: `.${styles.ul}`,
          start: "top 60%",
          end: "50% 50%",
          scrub: true,
        },
      }
    )
    let itemsL = gsap.utils.toArray(`.${styles.item_1}, .${styles.item_3}`)
    let itemsR = gsap.utils.toArray(`.${styles.item_2}, .${styles.item_4}`)
    itemsL.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            start: "-20% 80%",
            end: "top 70%",
            scrub: true,
          },
        }
      )
    })
    itemsR.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            start: "-20% 80%",
            end: "top 70%",
            scrub: true,
          },
        }
      )
    })
  }, [])

  const [state, setState] = useState(window.scrollY)
  const handleScroll = () => {
    setState(window.scrollY)
  }
  window.addEventListener("scroll", handleScroll)
  return (
    <main className={styles.main}>
      <section className={styles.layers}>
        <div className={styles.layers__container}>
          <div
            className={`${styles.layers__item} ${styles.layer_1}`}
            style={{
              transform: `translate3d(0, ${state / 1.55}px, 0)`,
            }}
          ></div>
          <div className={`${styles.layers__item} ${styles.layer_2}`}></div>
          <div className={`${styles.layers__item} ${styles.layer_3}`}></div>
          <div className="layers__item layer-4">
            <div className="hero-content">
              <h1
                className={styles.h1}
                style={{
                  transform: `translate3d(0, ${state / 2.1}px, 0)`,
                }}
              >
                HONDA <span>ACCORD</span>
              </h1>
            </div>
          </div>
          <div className="layers__item layer-5">
            <canvas className="rain"></canvas>
          </div>
        </div>
      </section>
      <div className={styles.nodes}>
        <h2 className="nodes">Узлы и агрегаты</h2>
        <ul className={styles.ul}>
          <Link to="/engine" className={`${styles.item_1} ${styles.item}`}>
            <div
              to="/engine"
              className={`${styles.photo_1} ${styles.photo}`}
            ></div>
            <p className={styles.paragraph}>двигатель</p>
          </Link>
          <a className={`${styles.item_2} ${styles.item}`}>
            <div className={`${styles.photo_2} ${styles.photo}`}></div>
            <p className={styles.paragraph}>кузов</p>
          </a>
          <a className={`${styles.item_3} ${styles.item}`}>
            <div className={`${styles.photo_3} ${styles.photo}`}></div>
            <p className={styles.paragraph}>подвеска</p>
          </a>
          <a className={`${styles.item_4} ${styles.item}`}>
            <div className={`${styles.photo_4} ${styles.photo}`}></div>
            <p className={styles.paragraph}>салон</p>
          </a>
        </ul>
      </div>
      <div className={styles.description}>
        <p className={styles.text}>
          Honda Accord- легендарная модель с многолетней историей. У нового
          поколения стильный и динамичный дизайн, который как нельзя лучше
          подчеркнет характер и статус своего владельца в обществе. Такой
          автомобиль не растворится в сером будничном потоке и не затеряется на
          большой парковке торгового центра. Салон- это царство качественных
          материалов отделки, выверенной эргономики, практичности и
          бескомпромиссного комфорта. Производитель прекрасно понимает, что в
          первую очередь, автомобиль должен дарить удовольствие от вождения.
          Именно поэтому, седан оборудуется отличной линейкой агрегатов,
          являющихся квинтэссенцией инновационных технологий и легендарного
          японского качества. Honda Accord прослужит многие километры и подарит
          незабываемые эмоции от поездки.
        </p>
      </div>
    </main>
  )
}

export default Main
