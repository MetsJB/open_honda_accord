import { useContext } from "react"
import { SliderContext } from "../../Slider"

const Slide = ({ slide, number }) => {
  const { WIDTH_PAGE, HEIGHT_PAGE } = useContext(SliderContext)

  function bgImage(imageName) {
    const imageUrl = require(`./../../../../../public/images/photo_auto/${imageName}.jpg`)
    return `url(${imageUrl})`
  }

  return (
    <div
      className={`photo`}
      style={{
        minWidth: WIDTH_PAGE,
        height: HEIGHT_PAGE,
        backgroundImage: bgImage(`photo${number + 1}`),
      }}
    ></div>
  )
}

export default Slide
