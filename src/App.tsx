import Error from "./pages/Error"
import { Route, Routes } from "react-router-dom"
import { publicRoutes } from "./router/routes"


function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<Error/>}/>
        {publicRoutes.map((route) => (
        <Route element={route.component} path={route.path} key={route.path} />
      ))}
      </Routes>
    </>
  )
}

export default App
