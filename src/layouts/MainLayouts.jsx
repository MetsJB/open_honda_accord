import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const MainLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer autoClose="1500" style={{ maxWidth: "300px" }} />
    </>
  )
}

export default MainLayouts
