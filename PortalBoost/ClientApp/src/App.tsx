import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContentWrapper from './components/common/ContentWrapper';
import LandingPage from './pages/landingPage/LandingPage';
import PageNotFound from './pages/pageNotFound/PageNotFound';


function App() {

  return (
    <>
      <h1 className='text-6xl'>Yeet</h1>
      <Router>

        {/* Header */}
        <ContentWrapper>

          <Routes>
            {/* If logged in, show LandingPage, else show LoginPage */}
            <Route path='/' element={<LandingPage />} />
            <Route path="*" element={<PageNotFound />} />

          </Routes>

        </ContentWrapper>
        {/* Footer */}

      </Router>
    </>
  )
}

export default App
