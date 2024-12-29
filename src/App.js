import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./components/main/Main.jsx"
import Slider from "./components/slider/Slider.jsx"
import Engine from "./components/engine/Engine.jsx"
import Pendant from "./components/pendant/Pendant.jsx"
import CarBody from "./components/carBody/CarBody.jsx"
import Interior from "./components/interior/Interior.jsx"
import Reviews from "./components/reviews/Reviews.jsx"
import MainLayouts from "./layouts/MainLayouts.jsx"

import "./App.css"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route index element={<Main />} />
            <Route path="/photo" element={<Slider />} />
            <Route path="/engine" element={<Engine />} />
            <Route path="/pendant" element={<Pendant />} />
            <Route path="/carbody" element={<CarBody />} />
            <Route path="/interior" element={<Interior />} />
            <Route path="/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
