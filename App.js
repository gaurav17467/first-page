import Login from './components/Login.js'
import Second from './components/Second.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/search' element={<Second/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
