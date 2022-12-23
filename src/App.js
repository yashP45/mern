import './App.css';
import Home from './Pages/Home';
import Edit from './Pages/Edit';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <Router >
       <div className="App">
   <Routes>

  <Route exact path="/" element={ <Home />} />
               
             
              <Route  path="/edit/:id" element={<Edit/>} />
             
              </Routes>
    </div>
    </Router>
  );
}

export default App;
