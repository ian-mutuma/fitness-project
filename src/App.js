import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import YogaCategory from "./components/YogaCategory";
import NavBar from "./components/NavBar";
import Yoga from "./components/Yoga";
import Homepage from "./components/Homepage";
import Diet from "./components/Diet";
import Fitness from "./components/Fitness";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
            <Route exact path="/" element= {<Homepage/>} />
            <Route path="/yoga" element= {<Yoga/>} />
            <Route path="/categories/:id" element= {<YogaCategory/>} />
            <Route path="/fitness" element= {<Fitness/>} />
            <Route path="/diet" element= {<Diet/>} />


           
        </Routes>
      </Router>
    </div>

    
  )
    
}

export default App;
