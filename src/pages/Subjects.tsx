import { useNavigate, useParams } from 'react-router-dom';
import courseData from '../data/courseData.json';
import './Subjects.css';

function Subjects() {
  const navigate = useNavigate();
  const { semesterId } = useParams();
  
  const semester = courseData.semesters.find(s => s.id === Number(semesterId));

  if (!semester) {
    return <div>Semester not found</div>;
  }

  return (
    <div className="subjects-container">
      <header className="page-header">
        <img src="/src/img/3.jpg" alt="Logo" className="header-logo" />
        <div>
          <button className="back-button" onClick={() => navigate('/semesters')}>
            ← Back to Semesters
          </button>
          <h1>{semester.name}</h1>
          <p className="header-subtitle">Select a Subject</p>
        </div>
      </header>

      <main className="subjects-main">
        <div className="subjects-grid">
          {semester.subjects.map((subject) => (
            <div 
              key={subject.id}
              className="subject-card"
              onClick={() => navigate(`/chapters/${semesterId}/${subject.id}`)}
            >
              <div className="subject-code">{subject.code}</div>
              <h2>{subject.name}</h2>
              <p className="chapter-count">
                {subject.chapters.length} {subject.chapters.length === 1 ? 'Chapter' : 'Chapters'}
              </p>
              <div className="subject-arrow">→</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Subjects;
