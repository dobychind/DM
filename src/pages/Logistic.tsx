import Navbar from "../components/navbar/Navbar"
import LogisticCom from "../components/logistic/Logistic";
import { useRef } from "react";



const Logistic = () => {

  const logisticRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Navbar/>
      <LogisticCom forwardRef={logisticRef}/>
    </div>
  )
}

export default Logistic
