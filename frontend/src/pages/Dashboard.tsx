import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Dashboard.css';

interface DashboardStats {
  total_farms: number;
  active_loans: number;
  market_alerts: number;
  crop_health_reports: number;
}

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/dashboard/stats');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">{t('common.loading')}</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>{t('dashboard.title')}</h1>
        <p>{t('dashboard.welcome')}</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🏡</div>
          <div className="stat-content">
            <h3>{stats?.total_farms || 0}</h3>
            <p>{t('dashboard.totalFarms')}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>{stats?.active_loans || 0}</h3>
            <p>{t('dashboard.activeLoans')}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h3>{stats?.market_alerts || 0}</h3>
            <p>{t('dashboard.marketAlerts')}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🌿</div>
          <div className="stat-content">
            <h3>{stats?.crop_health_reports || 0}</h3>
            <p>{t('dashboard.cropReports')}</p>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h2>{t('dashboard.quickActions')}</h2>
        <div className="actions-grid">
          <button 
            className="action-btn"
            onClick={() => window.location.href = '/market-analysis'}
          >
            📊 {t('navigation.marketAnalysis')}
          </button>
          
          <button 
            className="action-btn"
            onClick={() => window.location.href = '/microloans'}
          >
            💰 {t('navigation.microloans')}
          </button>
          
          <button 
            className="action-btn"
            onClick={() => window.location.href = '/crop-health'}
          >
            🌿 {t('navigation.cropHealth')}
          </button>
          
          <button 
            className="action-btn"
            onClick={() => window.location.href = '/assistant'}
          >
            🤖 {t('navigation.assistant')}
          </button>
          
          <button 
            className="action-btn"
            onClick={() => window.location.href = '/sales-platform'}
          >
            🛒 {t('navigation.salesPlatform')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;