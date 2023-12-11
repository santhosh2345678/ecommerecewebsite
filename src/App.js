import {Home} from "./Component/Home/Home";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(()=>{
    Aos.init();
    Aos.refresh();
  },[])
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
