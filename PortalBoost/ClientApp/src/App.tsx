import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContentWrapper from './components/common/ContentWrapper';
import LandingPage from './pages/landingPage/LandingPage';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import ViewEmployees from './pages/viewEmployees/ViewEmployees';
import ViewCompanies from './pages/viewCompanies/ViewCompanies';
import Header from './components/header/Header';
import Navbar from './components/navBar/Navbar';


function App() {

  return (
    <Router>

      {/* Header */}
      <Header />
      <Navbar/>
      
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
