import Error from "./pages/Error"
import MainPage from "./pages/MainPage"
import { Route, Routes } from "react-router-dom"
import Production from "./pages/Production"
import Distribution from "./pages/Distribution"
import Logistic from "./pages/Logistic"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/*" element={<Error/>}/>
        <Route path="/production" element={<Production/>}/>
        <Route path="/distribution" element={<Distribution/>}/>
        <Route path="/logistic" element={<Logistic/>}/>
      </Routes>
    </>
  )
}

export default App
