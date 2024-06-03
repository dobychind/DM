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
  const scrollToPoduction = useSmoothScrollToRef(productionRef);
  const scrollToDistribution = useSmoothScrollToRef(distributionRef);
  const scrollToLogistic = useSmoothScrollToRef(logisticRef);



  return (
    <div id='root' className='overflow-x-hidden font-body'>
        <Header scrollToLogistic={scrollToLogistic} scrollToPoduction={scrollToPoduction} scrollToDistribution={scrollToDistribution} scrollToAbout={scrollToAbout} forwardRef={headerRef}/>
        <div className="flex bg-bg py-[4rem] flex-col gap-[4rem] ">
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
