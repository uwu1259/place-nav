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

      <div className="dashboard-card" style={{ marginTop: '30px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '15px' }}>
        <FiPieChart size={48} color="var(--border-color)" />
        <h3 style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Detailed Analytics Charts Coming Soon</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We are aggregating the latest placement data.</p>
      </div>

    </div>
  );
}
