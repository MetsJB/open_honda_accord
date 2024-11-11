import { useState, useEffect, createContext } from "react"
import Arrows from "./arrows/Arrows"
import SliderList from "./slideList/SlideList"
import Slide from "./slideList/slide/Slide"
import Dots from "./dots/Dots"
import getImages from "./images"
import "./Slider.css"

const WIDTH_PAGE = 1000
const HEIGHT_PAGE = 600
const AUTOPLAY = true
const AUTOPLAY_TIME = 3000

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

    new Image().src = items[slide]
    new Image().src = items[prevItemIndex]
    new Image().src = items[nextItemIndex]
  }

  useEffect(() => {
    if (items.length) {
      preloadImages()
    }
  }, [slide, items])

  const changeSlide = (direction = 1) => {
    let slideNumber = 0

    if (slide + direction < 0) {
      slideNumber = items.length - 1
    } else {
      slideNumber = (slide + direction) % items.length
    }

    setSlide(slideNumber)
  }

  const goToSlide = (number) => {
    setSlide(number % items.length)
  }

  useEffect(() => {
    if (!AUTOPLAY) return

    const interval = setInterval(() => {
      changeSlide(1)
    }, AUTOPLAY_TIME)

    return () => {
      clearInterval(interval)
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
          items,
        }}
      >
        <Arrows />
        <div className="window">
          <SliderList />
        </div>
        <Dots />
      </SliderContext.Provider>
    </div>
  )
}

export default Slider
