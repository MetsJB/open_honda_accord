import { useContext } from "react"
import { SliderContext } from "../Slider"
import Slide from "./slide/Slide"

const SlideList = () => {
  const { slideNumber, items } = useContext(SliderContext)
  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((slide, index) => (
        <Slide key={index} data={slide} number={index} />
      ))}
    </div>
  )
}

export default SlideList
