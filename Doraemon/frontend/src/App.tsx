import { useEffect } from "react"
import Main from "./components/shared/Main"
import AOS from 'aos'
const App = () => {
  useEffect(()=>{
    AOS.init({
      duration : 600,
      easing : "ease-in-sine",
      offset : 100
    })
  }, [])
  return (
    <div className="w-full h-full">
      <Main />
    </div>
  )
}

export default App
