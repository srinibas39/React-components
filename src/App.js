import { Accordian } from "./Accordian/Accordian"
import { LoginForm } from "./LoginForm/LoginForm"
import { SlideShow } from "./slideShow/SlideShow"



export const App=()=>{
  return <div>
   <SlideShow/>
   <h1>------------------------------------------------------------------</h1>
   <LoginForm/>
   <h1>------------------------------------------------------------------</h1>
   <Accordian/>
   <h1>------------------------------------------------------------------</h1>
   


  </div>
}