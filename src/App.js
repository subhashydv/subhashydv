import React from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import WorkExperience from './components/WorkExperience';
import Portfolio from './components/Portfolio/Portfolio';
import theme from './assets/theme';
import { ThemeProvider } from '@mui/material/styles'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import EducationAndSkills from './components/EducationAndSkills/EducationAndSkills';
import Contact from './components/Contact';
import { DrawerProvider } from './components/DrawerContext';
import Blog from "./components/Blog";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <DrawerProvider>
          <div style={{ display: 'flex', overflow: 'hidden' }}>
            <Sidebar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Routes>
                <Route path="/subhashydv" element={<HomePage />} />
                <Route path="/workExperience" element={<WorkExperience />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/educationAndExperience" element={<EducationAndSkills />} />
                <Route path="/contact" element={<Contact />} />

                {/* Add other routes here if needed */}
              </Routes>
            </div>
          </div>
        </DrawerProvider>
      </Router>
    </ThemeProvider>

  );
}

export default App;
