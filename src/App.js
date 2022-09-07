import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Gaming from './pages/Gaming';
import Sports from './pages/Sports';
import Wrestling from './pages/Wrestling';
import GamingArticles from './articles/gamingArticles'
import SportsArticles from './articles/sportsArticles'
import WrestlingArticles from './articles/wrestlingArticles'

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
        <Route path='/gamingArticles' element={<GamingArticles/>}/>
        <Route path='/sportsArticles' element={<SportsArticles/>}/>
        <Route path='/wrestlingArticles' element={<WrestlingArticles/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
