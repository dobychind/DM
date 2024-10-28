import { Route, Routes } from "react-router-dom"
import { publicRoutes } from "./router/routes"
import useScrollToTop from "./hooks/useScrollToTop"


function App() {
  useScrollToTop();
  return (
    <>
      <Routes>
        <Route/>
        {publicRoutes.map((route) => (
        <Route element={route.component} path={route.path} key={route.path} />
      ))}
      </Routes>
    </>
  )
}

export default App
