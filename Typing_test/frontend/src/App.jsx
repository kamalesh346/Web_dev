import { useEffect } from "react"
import { healthCheck } from "./services/api"
function App(){
  useEffect(()=>{
    healthCheck().then(console.log)
  },[])
  return(
    <div>
      <h1>Typing test analyzer</h1>
      <p>Frontend connected to backend</p>
    </div>
  )
}
export default App