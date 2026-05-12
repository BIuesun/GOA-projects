
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <nav style={{ marginBottom: '20px' }}>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({ marginRight: '15px', fontWeight: isActive ? 'bold' : 'normal' })}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/about" 
            style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
          >
            About
          </NavLink>
        </nav>

        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;