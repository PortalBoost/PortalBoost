import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import ContentWrapper from './components/common/ContentWrapper';
import LandingPage from './pages/landingPage/LandingPage';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import ViewEmployees from './pages/viewEmployees/ViewEmployees';
import ViewCompanies from './pages/viewCompanies/ViewCompanies';
import LoginPage from "./pages/loginPage/LoginPage";
import Header from './components/header/Header';
import successfullLogin from "./atoms/successfulLogin";


function App() {

  const validLogin = useRecoilValue(successfullLogin)

  // TODO: Add authentication layer instead of the validLogin solution.
  // TODO: Reusable modal component
  // TODO: EmployeePreview minimalistic rounded version
  // TODO: Proper Employee interface using the data model from backend. User interface extends employee interface(?)
  // TODO: Rounded typical "Avatar"-style profile picture for previews. Larger image on expanded modal. 
  useEffect(() => {
    console.log(validLogin)
  }, [validLogin])

  return (
    <Router>

      <Header />

      <ContentWrapper>

        <Routes>

          <Route path="/employees" element={validLogin ? <ViewEmployees /> : <LoginPage />} />
          <Route path="/companies" element={validLogin ? <ViewCompanies /> : <LoginPage />} />
          <Route path="/" element={validLogin ? <LandingPage /> : <LoginPage />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>

      </ContentWrapper>
      {/* Footer */}

    </Router>
  )
}

export default App
