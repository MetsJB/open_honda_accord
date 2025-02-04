import { useContext } from "react"
import { SliderContext } from "../Slider"
import Dot from "./dot/Dot"

const Dots = () => {
  const { slidesCount } = useContext(SliderContext)

  const renderDots = () => {
    const dots = []
    for (let i = 0; i <= slidesCount - 1; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />)
    }

    return dots
  }

  return <div className="dots">{renderDots()}</div>
}

export default Dots
