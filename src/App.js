import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage"
import Food from "./pages/Food"
import Travel from "./pages/Travel"
import Attractions from "./pages/Attractions"
import PlacesToStay from "./pages/PlacesToStay"



function App() {
  return (
    <Router basename="/">
       <CurrentPage/>
    </Router>
  );
}

const CurrentPage = () => {
  return (
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/attractions" element={<Attractions />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/food" element={<Food />} />
              <Route path="/lodging" element={<PlacesToStay />} />
          </Routes>

  )
}

export default App;
