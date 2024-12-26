import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./components/Main/Main.jsx"
import Slider from "./components/Slider/Slider.jsx"
import Engine from "./components/Engine/Engine.jsx"
import Pendant from "./components/Pendant/Pendant.jsx"
import CarBody from "./components/CarBody/CarBody.jsx"
import Interior from "./components/Interior/Interior.jsx"
import Reviews from "./components/Reviews/Reviews.jsx"
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
