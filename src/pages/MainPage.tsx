import {useRef} from 'react'
import Header from '../components/header/Header'
import About from '../components/about/About'
import Production from '../components/production/Production'
import Distribution from '../components/distribution/Distribution'
import Logistic from '../components/logistic/Logistic'
import Footer from '../components/footer/Footer'

const MainPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const productionRef = useRef<HTMLDivElement>(null);
  const distributionRef = useRef<HTMLDivElement>(null);
  const logisticRef = useRef<HTMLDivElement>(null);


  // Функция для скролла к компоненту About
  const scrollToAbout = () => {
    setTimeout(() => {
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Примерно 100 миллисекунд задержки
  };

  const scrollToHeader = () => {
    setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Примерно 100 миллисекунд задержки
  };

  const scrollToPoduction = () => {
    setTimeout(() => {
      if (productionRef.current) {
        productionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Примерно 100 миллисекунд задержки
  };

  const scrollToDistribution = () => {
    setTimeout(() => {
      if (distributionRef.current) {
        distributionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Примерно 100 миллисекунд задержки
  };

  const scrollToLogistic = () => {
    setTimeout(() => {
      if (logisticRef.current) {
        logisticRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Примерно 100 миллисекунд задержки
  };



  return (
    <div id='root' className='font-body'>
        <Header scrollToLogistic={scrollToLogistic} scrollToPoduction={scrollToPoduction} scrollToDistribution={scrollToDistribution} scrollToAbout={scrollToAbout} forwardRef={headerRef}/>
        <div className="flex bg-bg py-[4rem] flex-col gap-[4rem]">
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
