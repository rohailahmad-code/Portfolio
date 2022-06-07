 import './App.css';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Frontend from './components/Frontend/Frontend';
import ReactApp from './components/ReactApp/ReactApp';

function App() {
  return (
    <div className="App">
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path='/work' element={<Work/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/frontend' element={<Frontend/>} />
        <Route path='/reactapp' element={<ReactApp/>}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
