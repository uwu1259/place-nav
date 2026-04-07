import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiFilter, FiSearch, FiMessageSquare } from "react-icons/fi";

export default function CompanyQuestion() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL || ""}/api/questions`);
        setQuestions(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching global questions:", err);
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="questions-dashboard">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h1>Interview Questions Hub</h1>
          <p>Browse through authentic technical and HR queries asked by top recruiters.</p>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button style={{ background: 'white', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <FiFilter /> Filter
          </button>
        </div>
      </div>

      {loading ? (
        <div style={{ padding: '50px', textAlign: 'center', color: 'var(--text-muted)' }}>Loading all question data...</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
          {questions.map((q) => (
            <div key={q._id} className="dashboard-card" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ padding: '15px', background: 'var(--primary-light)', borderRadius: '16px', color: 'var(--primary-accent)', flexShrink: 0 }}>
                <FiMessageSquare size={24} />
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: '0 0 10px 0', fontWeight: '600' }}>
                    {q.text?.length > 60 ? q.text.substring(0, 60) + '...' : q.text}
                  </h3>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', background: 'var(--highlight-yellow)', color: 'var(--highlight-yellow-text)' }}>
                      Topic: {q.type}
                    </span>
                    <span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', background: 'var(--highlight-orange)', color: 'var(--highlight-orange-text)' }}>
                      Diff: {q.difficulty}
                    </span>
                    <span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                      {q.role}
                    </span>
                    {q.companies && q.companies.length > 0 && (
                      <span style={{ fontSize: '0.8rem', color: 'white', background: 'var(--primary-accent)', padding: '4px 12px', borderRadius: '20px', fontWeight: '600' }}>
                        {q.companies.length} {q.companies.length === 1 ? 'Company' : 'Companies'}
                      </span>
                    )}
                  </div>
                </div>
                <a href="#" style={{ padding: '8px 16px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '12px', color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
                  View Link
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
