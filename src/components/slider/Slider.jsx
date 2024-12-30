import { useState, useEffect, createContext } from "react"
import Arrows from "./arrows/Arrows"
import Slide from "./slide/Slide"
import Dots from "./dots/Dots"
import getImages from "./images"
import "./Slider.css"

const WIDTH_PAGE = 1000
const HEIGHT_PAGE = 600
const AUTOPLAY = true
const AUTOPLAY_TIME = 4000

export const SliderContext = createContext()

const Slider = function () {
  const [items, setItems] = useState([])
  const [slide, setSlide] = useState(0)
  const [animation, setAnimation] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      const images = await getImages()
      setItems(images)
    }

    loadData()
  }, [])

  const preloadImages = () => {
    const prevItemIndex = slide - 1 < 0 ? items.length - 1 : slide - 1
    const nextItemIndex = (slide + 1) % items.length

    new Image().src = require(`./../../images/photo_auto/photo${slide + 1}.jpg`)
    new Image().src = require(`./../../images/photo_auto/photo${
      prevItemIndex + 1
    }.jpg`)
    new Image().src = require(`./../../images/photo_auto/photo${
      nextItemIndex + 1
    }.jpg`)
  }

  useEffect(() => {
    if (items.length) {
      preloadImages()
    }
  }, [slide, items])

  const changeSlide = (direction = 1) => {
    setAnimation(false)
    let slideNumber = 0

    if (slide + direction < 0) {
      slideNumber = items.length - 1
    } else {
      slideNumber = (slide + direction) % items.length
    }

    setSlide(slideNumber)

    const timeout = setTimeout(() => {
      setAnimation(true)
    }, 0)

    return () => {
      clearTimeout(timeout)
    }
  }

  const goToSlide = (number) => {
    setAnimation(false)
    setSlide(number % items.length)

    const timeout = setTimeout(() => {
      setAnimation(true)
    }, 0)

    return () => {
      clearTimeout(timeout)
    }
  }

  useEffect(() => {
    if (!AUTOPLAY) return

    if (items.length) {
      const interval = setInterval(() => {
        changeSlide(1)
      }, AUTOPLAY_TIME)

      return () => {
        clearInterval(interval)
      }
    }
  }, [items.length, slide])
  return (
    <div
      className="slider"
      style={{ width: WIDTH_PAGE, minHeight: HEIGHT_PAGE }}
    >
      <SliderContext.Provider
        value={{
          WIDTH_PAGE,
          HEIGHT_PAGE,
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
        }}
      >
        <Arrows />
        <div className="window">
          {items.length ? <Slide id={slide} animation={animation} /> : null}
        </div>
        <Dots />
      </SliderContext.Provider>
    </div>
  )
}

export default Slider
