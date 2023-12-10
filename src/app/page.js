import Image from 'next/image'
import Navbar from '../app/component/navbar'
import Textanim from '../app/component/textanim'
import Hero from '../app/component/Hero'
import About from '../app/component/About'
import Service from './component/Service'
import Contact from './component/Contact'
import Footer from '../app/component/Footer'
export default function Home() {
  return (
    <>
    <Navbar />
    <Textanim />
    <Hero/>
    <About/>
    <Service/>
    <Contact/>
    <Footer/>
    </>
   ) 
}
