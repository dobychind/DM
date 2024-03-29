import {useRef} from 'react'
import Header from '../components/header/Header'
import About from '../components/about/About'
import Production from '../components/production/Production'
import Distribution from '../components/distribution/Distribution'
import Logistic from '../components/logistic/Logistic'
import Footer from '../components/footer/Footer'

const MainPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  // Функция для скролла к компоненту About
  const scrollToAbout = () => {
    setTimeout(() => {
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Примерно 100 миллисекунд задержки
  };

  return (
    <div>
        <Header scrollToAbout={scrollToAbout}/>
        {/* <Slider></Slider> */}
        <div className="flex bg-bg py-[4rem] flex-col gap-[4rem]">
          <About forwardRef={aboutRef}/>
          <Production />
          <Distribution/>
          <Logistic/>
        </div>
        <Footer/>

    </div>
  )
}

export default MainPage
