import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Semesters from './pages/Semesters';
import Subjects from './pages/Subjects';
import Chapters from './pages/Chapters';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/semesters" element={<Semesters />} />
          <Route path="/subjects/:semesterId" element={<Subjects />} />
          <Route path="/chapters/:semesterId/:subjectId" element={<Chapters />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
