import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Gaming from './pages/Gaming';
import Sports from './pages/Sports';
import Wrestling from './pages/Wrestling';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Gaming/>}/>
        <Route path='/gaming' element={<Gaming/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/wrestling' element={<Wrestling/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
