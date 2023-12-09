import Image from 'next/image'
import Navbar from '../app/component/navbar'
import Textanim from '../app/component/textanim'
import Hero from '../app/component/Hero'
import Thankyou from '../app/component/Thankyou'
import Cvv from './component/Cvv';
import About from '../app/component/About'
import Service from './component/Service'
import Contact from './component/Contact'
export default function Home() {
  return (
    <>
    <Navbar />
    <Textanim />
    <Hero/>
    <Thankyou/>
    <Cvv/>
    <About/>
    <Service/>
    <Contact/>
    </>
   ) 
}
