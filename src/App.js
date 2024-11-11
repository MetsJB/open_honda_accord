import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home.js"
import Photo from "./pages/Photo/Photo.jsx"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Photo />} path="/photo" />
          {/* <Route element={<Contacts />} path="/contacts" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
