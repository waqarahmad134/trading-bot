import React from "react"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Partners from "../components/Partners"
import Security from "../components/Security"

export default function Home() {
  return (
    <>
      <div className="sm:w-11/12 md:w-[82%] mx-auto font-poppins">
        <Header />
        <Banner/>
        <Partners/>
        <Security/>
      </div>
      <Footer />
    </>
  )
}
