import About from "./components/about/About"
import Header from "./components/header/Header"
import Production from "./components/production/Production"
import Slider from "./components/slider/Slider"

function App() {

  return (
    <>
      <div>
        <Header />
        <Slider></Slider>
        <div className="flex py-[4rem] flex-col gap-[4rem]">
          <About />
          <Production />
        </div>

      </div>

    </>
  )
}

export default App
