import {useRef} from 'react'
import Header from '../components/header/Header'
import About from '../components/about/About'
import Production from '../components/production/Production'
import Distribution from '../components/distribution/Distribution'
import Logistic from '../components/logistic/Logistic'
import Footer from '../components/footer/Footer'
import useSmoothScrollToRef from '../hooks/useScroll'

const MainPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const productionRef = useRef<HTMLDivElement>(null);
  const distributionRef = useRef<HTMLDivElement>(null);
  const logisticRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = useSmoothScrollToRef(aboutRef);
  const scrollToHeader = useSmoothScrollToRef(headerRef);

  return (
    <div id='root' className='flex flex-col  bg-bg justify-center items-center overflow-x-hidden font-body gap-20 lg:gap-24 xl:gap-28 2xl:gap-32'>
        <Header  scrollToAbout={scrollToAbout} forwardRef={headerRef}/>
        <div className="flex flex-col justify-center items-center gap-14 md:gap-[8rem] w-[96vw] lg:w-[89vw]">
          <About forwardRef={aboutRef}/>
          <Production forwardRef={productionRef}/>
          <Distribution forwardRef={distributionRef}/>
          <Logistic forwardRef={logisticRef}/>
        </div>
        <Footer scrollToHeader={scrollToHeader}/>

    </div>  
  )
}

export default MainPage
