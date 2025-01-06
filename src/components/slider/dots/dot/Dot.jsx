import { useContext } from "react"
import { SliderContext } from "../../Slider"
import { FaRegDotCircle } from "react-icons/fa"

const Dot = ({ number }) => {
  const { goToSlide, slideNumber } = useContext(SliderContext)

  return (
    <FaRegDotCircle
      className={`dot ${slideNumber === number ? "selected" : ""}`}
      onClick={() => goToSlide(number)}
    />
  )
}

export default Dot
