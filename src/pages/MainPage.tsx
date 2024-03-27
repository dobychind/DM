import Header from '../components/header/Header'
import Slider from '../components/slider/Slider'
import About from '../components/about/About'
import Production from '../components/production/Production'
import Distribution from '../components/distribution/Distribution'
import Logistic from '../components/logistic/Logistic'

const MainPage = () => {
  return (
    <div>
        <Header />
        <Slider></Slider>
        <div className="flex py-[4rem] flex-col gap-[4rem]">
          <About />
          <Production />
          <Distribution/>
          <Logistic/>
        </div>
    </div>
  )
}

export default MainPage
