import style from "./pendant.module.css"

const Pendant = () => {
  return (
    <div className={style.container}>
      <img
        src={require("./../../images/подвескаСтраница.png")}
        className={style.background}
      />
      <div className={style.paragraphs}>
        <p className={style}>
          По стандарту на Honda Accord 2018 установлены 17″ или 19″
          легкосплавные диски нового образца. Производитель не исключает
          вариант, что можно установить и другие фирменные диски, подходящие по
          размерам. Размер шин 225/50 или 235/40.
        </p>
        <p>
          Относительно подвески нового Honda Accord 2018, то спереди установили
          стойки McPherson, а сзади обычная многорычажная, более компактная, чем
          в предыдущих поколениях. Опционально покупатель может установить
          адаптивные амортизаторы, с двумя режимами работы: комфортный и
          спортивный. По кузову доступен будет только седан Honda Accord 2018, а
          вот купе версия больше не будет выпускаться. Как показала статистика,
          двухдверка почти не пользовалась спросом.
        </p>
      </div>
    </div>
  )
}

export default Pendant