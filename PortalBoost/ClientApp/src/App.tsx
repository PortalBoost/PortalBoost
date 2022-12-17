import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import AuthRoute from "./components/AuthRoute";
import ContentWrapper from './components/common/ContentWrapper';
import LandingPage from './pages/landingPage/LandingPage';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import ViewEmployees from './pages/viewEmployees/ViewEmployees';
import ViewCompanies from './pages/viewCompanies/ViewCompanies';
import CompanyPage from './pages/viewCompanies/CompanyPage';
import LoginPage from "./pages/loginPage/LoginPage";
import Profile from "./pages/profilePage/Profile";
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import ConditionalNavbar from './components/navBar/ConditionalNavbar';
import successfullLogin from "./atoms/successfulLoginState";
import useFetchData from "./hooks/useFetchData";


// TODO: Reusable modal component
// TODO: EmployeePreview minimalistic rounded version
// TODO: Rounded typical "Avatar"-style profile picture for previews. Larger image on expanded modal. 
function App() {

  const validLogin = useRecoilValue(successfullLogin)
  const { setData } = useFetchData();

  useEffect(() => {
    console.log(validLogin)
    setData();
  }, [])


  /** Test-user login:
   *  username: user
   *  password: 1234
   */
  return (
    <Router>

      <Header />


      <ContentWrapper>
        <ConditionalNavbar />
        <Routes>

          <Route path="/" element={<AuthRoute />} >
            <Route path="/" element={<LandingPage />} />
            <Route path="/employees" element={<ViewEmployees />} />
            <Route path="/companies" element={<ViewCompanies />} />
            <Route path="/companies/:id" element={<CompanyPage />} />
            <Route path="/profile" element={<Profile />} />

          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>

      </ContentWrapper>
      <Footer />
      <ScrollToTopButton />

    </Router>
  )
}

export default App
