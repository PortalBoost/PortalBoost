import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContentWrapper from './components/common/ContentWrapper';
import LandingPage from './pages/landingPage/LandingPage';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import ViewEmployees from './pages/viewEmployees/ViewEmployees';
import ViewCompanies from './pages/viewCompanies/ViewCompanies';


function App() {

  return (
    <Router>

      <h1 className='text-6xl'>
        <Link to="/">Yeet</Link>
      </h1>

      {/* Header */}
      <ContentWrapper>

        <Routes>
          {/* If logged in, show LandingPage, else show LoginPage */}
          <Route path="/employees" element={<ViewEmployees />} />
          <Route path="/companies" element={<ViewCompanies />} />
          <Route path='/' element={<LandingPage />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>

      </ContentWrapper>
      {/* Footer */}

    </Router>
  )
}

export default App
