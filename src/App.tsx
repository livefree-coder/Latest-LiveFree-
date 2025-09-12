import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import StudyInCanadaPage from './pages/StudyInCanadaPage';
import VisitCanadaPage from './pages/VisitCanadaPage';
import WorkInCanadaPage from './pages/WorkInCanadaPage';
import ImmigratePRPage from './pages/ImmigratePRPage';
import BusinessImmigrationPage from './pages/BusinessImmigrationPage';
// --- ADD THESE TWO IMPORTS ---
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/study-in-canada" element={<StudyInCanadaPage />} />
          <Route path="/visit-canada" element={<VisitCanadaPage />} />
          <Route path="/work-in-canada" element={<WorkInCanadaPage />} />
          <Route path="/immigrate-pr" element={<ImmigratePRPage />} />
          <Route path="/business-immigration" element={<BusinessImmigrationPage />} />
          
          {/* --- ADD THESE TWO ROUTES --- */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;