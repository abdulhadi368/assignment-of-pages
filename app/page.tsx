import Image from "next/image"
import Navbar from "./componenet/Navbar"
import Link from "next/link"
import Hero from "./componenet/Hero"
import Footer from "./componenet/Footer"

export default function Home() {
  return(
    <div>
      <Navbar />
      <ul>
        <Hero/>
        <Footer/>
      </ul>
    </div>
  )
}