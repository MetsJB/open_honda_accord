import { useContext } from "react"
import { SliderContext } from "../Slider"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"

const Arrows = () => {
  const { changeSlide } = useContext(SliderContext)

  return (
    <div className="arrows">
      <FaChevronLeft
        className="arrow left"
        onClick={() => {
          changeSlide(-1)
        }}
      >
        Стрелка влево
      </FaChevronLeft>
      <FaChevronRight
        className="arrow right"
        onClick={() => {
          changeSlide(1)
        }}
      >
        Стрелка вправо
      </FaChevronRight>
    </div>
  )
}

export default Arrows
