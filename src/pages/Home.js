import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollSmoother } from 'gsap/all';
import Header from "../components/Header/Header"
import Footer from "../components//footer/Footer"
import Main from "../components/Main/Main"
import "../App.css"

const Home = () => {
  // console.log(ScrollSmoother)
  return (
    <>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default Home
