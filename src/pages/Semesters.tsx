import { useNavigate } from 'react-router-dom';
import courseData from '../data/courseData.json';
import './Semesters.css';

function Semesters() {
  const navigate = useNavigate();

  return (
    <div className="semesters-container">
      <header className="page-header">
        <img src="/src/img/2.jpg" alt="Logo" className="header-logo" />
        <div>
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
          <h1>{courseData.courseName}</h1>
          <p className="header-subtitle">Select a Semester</p>
        </div>
      </header>

      <main className="semesters-main">
        <div className="semesters-grid">
          {courseData.semesters.map((semester) => (
            <div 
              key={semester.id}
              className={`semester-card ${semester.subjects.length === 0 ? 'coming-soon' : ''}`}
              onClick={() => semester.subjects.length > 0 && navigate(`/subjects/${semester.id}`)}
            >
              <div className="semester-number">Sem {semester.id}</div>
              <h2>{semester.name}</h2>
              <p className="subject-count">
                {semester.subjects.length > 0 
                  ? `${semester.subjects.length} Subjects` 
                  : 'Coming Soon'}
              </p>
              {semester.subjects.length > 0 && (
                <div className="semester-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Semesters;
