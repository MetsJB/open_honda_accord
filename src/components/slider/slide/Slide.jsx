import { useContext, useEffect, useState } from "react"
import { FaSpinner } from "react-icons/fa"
import { SliderContext } from "../Slider"
import "../Slider.css"

const Slide = ({ id, animation }) => {
  const [isLoading, setIsLoading] = useState(true)
  const { WIDTH_PAGE, HEIGHT_PAGE } = useContext(SliderContext)

  function bgImage(imageName) {
    const imageUrl = require(`./../../../images/photo_auto/photo${imageName}.jpg`)
    return imageUrl
  }

  const currentUrlImg = bgImage(`${id + 1}`)
  const currentImg = new Image()

  useEffect(() => {
    setIsLoading(true)

    currentImg.src = currentUrlImg
    currentImg.onload = () => setIsLoading(false)
  }, [currentUrlImg])

  return (
    <>
      {isLoading ? (
        <p className="loading">
          Загрузка
          <FaSpinner className="spinner" />
        </p>
      ) : (
        <img
          src={currentUrlImg}
          className={`slide-image ${animation ? "coincidental" : ""}`}
          style={{
            minWidth: WIDTH_PAGE,
            minHeight: HEIGHT_PAGE,
          }}
        />
      )}
    </>
  )
}

export default Slide
