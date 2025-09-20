import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    window.location.href = '/';
  };

  const navItems = [
    { path: '/dashboard', label: t('navigation.dashboard'), icon: '📊' },
    { path: '/market-analysis', label: t('navigation.marketAnalysis'), icon: '📈' },
    { path: '/microloans', label: t('navigation.microloans'), icon: '💰' },
    { path: '/crop-health', label: t('navigation.cropHealth'), icon: '🌿' },
    { path: '/assistant', label: t('navigation.assistant'), icon: '🤖' },
    { path: '/sales-platform', label: t('navigation.salesPlatform'), icon: '🛒' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/dashboard">🌱 AgriLink360</Link>
      </div>

      <div className="nav-menu">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </div>

      <div className="nav-controls">
        <div className="language-selector">
          <select
            value={i18n.language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="language-select"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="mr">मराठी</option>
          </select>
        </div>

        <button onClick={handleLogout} className="logout-btn">
          {t('common.logout')}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;