import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home.js"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          {/* <Route element={<Studio />} path="/studio" />
          <Route element={<Contacts />} path="/contacts" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
