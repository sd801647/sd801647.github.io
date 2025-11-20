import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import courseData from '../data/courseData.json';
import './Chapters.css';

interface Topic {
  id: string;
  title: string;
  notes: Array<{ type: string; title: string; url: string }>;
  recordings: Array<{ title: string; duration: string; url: string }>;
}

function Chapters() {
  const navigate = useNavigate();
  const { semesterId, subjectId } = useParams();
  
  const semester = courseData.semesters.find(s => s.id === Number(semesterId));
  const subject = semester?.subjects.find(sub => sub.id === subjectId);
  
  const [selectedChapter, setSelectedChapter] = useState(subject?.chapters[0]?.id || '');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  if (!semester || !subject) {
    return <div>Subject not found</div>;
  }

  const currentChapter = subject.chapters.find(ch => ch.id === selectedChapter);

  const handleChapterClick = (chapterId: string) => {
    setSelectedChapter(chapterId);
    setSelectedTopic(null);
  };

  const handleTopicClick = (topic: Topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="chapters-container">
      <header className="page-header">
        <img src="/src/img/4.png" alt="Logo" className="header-logo" />
        <div>
          <button className="back-button" onClick={() => navigate(`/subjects/${semesterId}`)}>
            ← Back to Subjects
          </button>
          <div>
            <h1>{subject.name}</h1>
            <p className="header-subtitle">{subject.code}</p>
          </div>
        </div>
      </header>

      <main className="chapters-main">
        <aside className="chapters-sidebar">
          <h2>Chapters</h2>
          <div className="chapters-list">
            {subject.chapters.map((chapter) => (
              <button
                key={chapter.id}
                className={`chapter-item ${selectedChapter === chapter.id ? 'active' : ''}`}
                onClick={() => handleChapterClick(chapter.id)}
              >
                {chapter.name}
              </button>
            ))}
          </div>
        </aside>

        <div className="topics-content">
          {currentChapter && (
            <>
              <div className="topics-header">
                <h2>{currentChapter.name}</h2>
              </div>

              <div className="topics-list">
                {currentChapter.topics.map((topic) => (
                  <div
                    key={topic.id}
                    className={`topic-item ${selectedTopic?.id === topic.id ? 'active' : ''}`}
                    onClick={() => handleTopicClick(topic)}
                  >
                    <h3>{topic.title}</h3>
                    <div className="topic-meta">
                      <span>📄 {topic.notes.length} Notes</span>
                      <span>🎥 {topic.recordings.length} Recordings</span>
                    </div>
                  </div>
                ))}
              </div>

              {selectedTopic && (
                <div className="materials-section">
                  <h3>Study Materials</h3>
                  
                  {selectedTopic.notes.length > 0 && (
                    <div className="materials-group">
                      <h4>📚 Notes & Resources</h4>
                      {selectedTopic.notes.map((note, index) => (
                        <div key={index} className="material-item">
                          {note.type === 'image' ? (
                            <div className="material-image">
                              <img src={note.url} alt={note.title} />
                              <p>{note.title}</p>
                            </div>
                          ) : (
                            <a href={note.url} className="material-link" target="_blank" rel="noopener noreferrer">
                              <span className="material-icon">📄</span>
                              <span>{note.title}</span>
                              <span className="download-icon">⬇</span>
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedTopic.recordings.length > 0 && (
                    <div className="materials-group">
                      <h4>🎥 Lecture Recordings</h4>
                      {selectedTopic.recordings.map((recording, index) => {
                        const isGoogleDrive = recording.url.includes('drive.google.com');
                        const embedUrl = isGoogleDrive 
                          ? recording.url.replace('/view', '/preview')
                          : recording.url;
                        
                        return (
                          <div key={index} className="material-item">
                            {isGoogleDrive && recording.url !== '#' ? (
                              <div className="video-player">
                                <div className="video-header">
                                  <span className="video-title">{recording.title}</span>
                                  {recording.duration && <span className="video-duration">{recording.duration}</span>}
                                </div>
                                <iframe
                                  src={embedUrl}
                                  className="embedded-video"
                                  allow="autoplay"
                                  allowFullScreen
                                  title={recording.title}
                                ></iframe>
                              </div>
                            ) : (
                              <a href={recording.url} className="material-link" target="_blank" rel="noopener noreferrer">
                                <span className="material-icon">🎥</span>
                                <div className="recording-info">
                                  <span>{recording.title}</span>
                                  <span className="recording-duration">{recording.duration}</span>
                                </div>
                                <span className="play-icon">▶</span>
                              </a>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Chapters;
