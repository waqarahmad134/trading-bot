import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  

  return (
    <div className="sm:w-11/12 md:w-[82%] mx-auto">
      <Header />
      <div>Body</div>
      <Footer />
    </div>
  )
}
