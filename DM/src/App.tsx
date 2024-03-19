import About from "./components/about/About"
import Header from "./components/header/Header"
import Slider from "./components/slider/Slider"

function App() {

  return (
    <>
      <div>
        <Header/>
        <Slider></Slider>
        <div className="flex py-[4rem] flex-col gap-[4rem]">
        <About/>
        </div>
        
      </div>
      
    </>
  )
}

export default App
