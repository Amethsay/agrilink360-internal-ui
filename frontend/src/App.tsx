import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './i18n';

// Components
import Navigation from './components/Navigation';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Placeholder components for other pages
const MarketAnalysis = () => <div style={{padding: '20px', textAlign: 'center'}}><h1>📈 Market Analysis</h1><p>Coming soon...</p></div>;
const Microloans = () => <div style={{padding: '20px', textAlign: 'center'}}><h1>💰 Microloans</h1><p>Coming soon...</p></div>;
const CropHealth = () => <div style={{padding: '20px', textAlign: 'center'}}><h1>🌿 Crop Health</h1><p>Coming soon...</p></div>;
const Assistant = () => <div style={{padding: '20px', textAlign: 'center'}}><h1>🤖 Assistant</h1><p>Coming soon...</p></div>;
const SalesPlatform = () => <div style={{padding: '20px', textAlign: 'center'}}><h1>🛒 Sales Platform</h1><p>Coming soon...</p></div>;

// Protected Route wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('access_token');
  return token ? <>{children}</> : <Navigate to="/" replace />;
};

// Layout wrapper for authenticated pages
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/market-analysis"
            element={
              <ProtectedRoute>
                <Layout>
                  <MarketAnalysis />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/microloans"
            element={
              <ProtectedRoute>
                <Layout>
                  <Microloans />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/crop-health"
            element={
              <ProtectedRoute>
                <Layout>
                  <CropHealth />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/assistant"
            element={
              <ProtectedRoute>
                <Layout>
                  <Assistant />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/sales-platform"
            element={
              <ProtectedRoute>
                <Layout>
                  <SalesPlatform />
                </Layout>
              </ProtectedRoute>
            }
          />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
