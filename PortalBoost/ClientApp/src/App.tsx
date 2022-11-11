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
import ConditionalNavbar from './components/navBar/ConditionalNavbar';
import successfullLogin from "./atoms/successfulLogin";


function App() {

  const validLogin = useRecoilValue(successfullLogin)

  // TODO: Add authentication layer instead of the validLogin solution.
  return (
    <Router>

      <Header />
      <ConditionalNavbar/>

      <ContentWrapper>

        <Routes>

          <Route path="/employees" element={validLogin ? <ViewEmployees /> : <LoginPage />} />
          <Route path="/companies" element={validLogin ? <ViewCompanies /> : <LoginPage />} />
          <Route path="/companies/testCompany" element={validLogin ? <LandingPage /> : <LoginPage />} />
          <Route path="/" element={validLogin ? <LandingPage /> : <LoginPage />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>

      </ContentWrapper>
      {/* Footer */}

    </Router>
  )
}

export default App
