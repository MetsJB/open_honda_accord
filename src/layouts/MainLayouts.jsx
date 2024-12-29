import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const MainLayouts = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }

  ScrollToTop()

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
