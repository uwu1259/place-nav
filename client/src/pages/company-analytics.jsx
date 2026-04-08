import { FiPieChart, FiTrendingUp, FiActivity } from "react-icons/fi";

export default function CompanyAnalytics() {
  return (
    <div className="analytics-dashboard">
      <div className="page-header">
        <h1>Placement Analytics</h1>
        <p>Dive deep into placement statistics, hiring trends, and package details across departments.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
        
        {/* Placeholder Stat 1 */}
        <div className="dashboard-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ padding: '12px', background: 'var(--primary-light)', borderRadius: '12px', color: 'var(--primary-accent)' }}>
              <FiTrendingUp size={24} />
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>This Year</span>
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '5px' }}>12.5 LPA</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Average Package</p>
          </div>
        </div>

        {/* Placeholder Stat 2 */}
        <div className="dashboard-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ padding: '12px', background: 'var(--highlight-yellow)', borderRadius: '12px', color: 'var(--highlight-yellow-text)' }}>
              <FiPieChart size={24} />
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>Overall</span>
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '5px' }}>85%</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Placement Rate</p>
          </div>
        </div>

        {/* Placeholder Stat 3 */}
        <div className="dashboard-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ padding: '12px', background: 'var(--highlight-orange)', borderRadius: '12px', color: 'var(--highlight-orange-text)' }}>
              <FiActivity size={24} />
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>Active Drives</span>
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '5px' }}>24</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Companies Visiting</p>
          </div>
        </div>

      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '30px', marginTop: '30px' }}>
        
        <div className="dashboard-card" style={{ padding: '20px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FiActivity color="var(--primary-accent)" /> Average CTC by Branch
          </h3>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', background: 'white' }}>
            <img src="/statistics/avg_ctc_branch.png" alt="Average CTC by Branch" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>

        <div className="dashboard-card" style={{ padding: '20px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FiPieChart color="var(--primary-accent)" /> CTC Distribution
          </h3>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', background: 'white' }}>
            <img src="/statistics/ctc_distribution.png" alt="CTC Distribution" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>

        <div className="dashboard-card" style={{ padding: '20px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FiActivity color="var(--primary-accent)" /> Gender Distribution
          </h3>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', background: 'white' }}>
            <img src="/statistics/gender_distribution.png" alt="Gender Distribution" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>

        <div className="dashboard-card" style={{ padding: '20px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FiTrendingUp color="var(--primary-accent)" /> Top Recruiters
          </h3>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', background: 'white' }}>
            <img src="/statistics/top_companies.png" alt="Top Recruiters" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>

      </div>

    </div>
  );
}
