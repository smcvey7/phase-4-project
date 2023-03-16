import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import NavBar from './NavBar';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <h1>Project site</h1>
      <NavBar/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/1" element={<ComponentOne/>} />
        <Route  path="/2" element={<ComponentTwo/>} />
        <Route  path="/3" element={<ComponentThree/>} />
      </Routes>
    </div>
  );
}

export default App;
