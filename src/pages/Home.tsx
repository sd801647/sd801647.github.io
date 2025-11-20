import { useNavigate } from 'react-router-dom';
import courseData from '../data/courseData.json';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <img src="/src/img/1.png" alt="Logo" className="header-logo" />
        <div className="header-content">
          <h1 className="college-name">{courseData.collegeName}</h1>
          <p className="college-tagline">{courseData.collegeTagline}</p>
        </div>
      </header>

      <main className="home-main">
        <div className="welcome-section">
          <div className="welcome-content">
            <h2 className="welcome-title">Welcome to Your Study Portal</h2>
            <p className="welcome-text">
              Access all your course materials, lecture recordings, and study notes in one place.
              Navigate through semesters, subjects, and chapters with ease.
            </p>
          </div>
          <div className="welcome-image">
            <img 
              src="https://picsum.photos/600/400?random=1" 
              alt="Students studying" 
            />
          </div>
        </div>

        <div className="course-card">
          <div className="course-icon">📚</div>
          <h2 className="course-name">{courseData.courseName}</h2>
          <p className="course-description">
            Comprehensive study materials for all 8 semesters. Click below to explore subjects,
            chapters, and download notes and recordings.
          </p>
          <button 
            className="explore-button"
            onClick={() => navigate('/semesters')}
          >
            Explore Course Materials
          </button>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📖</div>
            <h3>Study Notes</h3>
            <p>Download PDF notes for all subjects</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎥</div>
            <h3>Lecture Recordings</h3>
            <p>Access recorded lectures anytime</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Visual Materials</h3>
            <p>Mind maps, charts, and diagrams</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Regular Updates</h3>
            <p>Fresh content added regularly</p>
          </div>
        </div>
      </main>

      <footer className="home-footer">
        <p>&copy; 2025 {courseData.collegeName}. All rights reserved.</p>
        <p>Developed by Subhamay Dhara</p>
      </footer>
    </div>
  );
}

export default Home;
