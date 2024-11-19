import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Photo from "./pages/Photo.jsx"
import Engine from "./pages/Engine.jsx"
import "./App.css"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Photo />} path="/photo" />
          <Route element={<Engine />} path="/engine" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
