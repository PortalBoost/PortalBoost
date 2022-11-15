import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import AuthRoute from "./components/AuthRoute";
import ContentWrapper from './components/common/ContentWrapper';
import LandingPage from './pages/landingPage/LandingPage';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import ViewEmployees from './pages/viewEmployees/ViewEmployees';
import ViewCompanies from './pages/viewCompanies/ViewCompanies';
import LoginPage from "./pages/loginPage/LoginPage";
import Header from './components/header/Header';
import Navbar from './components/navBar/Navbar';
import MobileNavbar from './components/navBar/MobileNavBar';
import successfullLogin from "./atoms/successfulLoginState";
import useFetchData from "./hooks/useFetchData";
import { getUsers } from "./services/API/userService";
import userDataState from "./atoms/userDataState";
import { getCompanies } from "./services/API/companyService";
import companyDataState from "./atoms/companyDataState";

// TODO: Reusable modal component
// TODO: EmployeePreview minimalistic rounded version
// TODO: Rounded typical "Avatar"-style profile picture for previews. Larger image on expanded modal. 
function App() {
  const setUserData = useSetRecoilState(userDataState)
  const setCompanyData = useSetRecoilState(companyDataState)

  // TODO: Move out into useFetchData hook
  const getData = async () => {
    const users = await getUsers();
    const companies = await getCompanies();
    setUserData(users)
    setCompanyData(companies)
  }

  useEffect(() => {
    getData();
  }, [])


  /** Test-user login:
   *  username: user
   *  password: 1234
   */
  return (
    <Router>

      <Header />
      <Navbar />

      {/* navbar för mobilläge */}
      {/* <MobileNavbar /> */}

      <ContentWrapper>

        <Routes>

          <Route path="/" element={<AuthRoute />} >
            <Route path="/" element={<LandingPage />} />
            <Route path="/employees" element={<ViewEmployees />} />
            <Route path="/companies" element={<ViewCompanies />} />
          </Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<PageNotFound />} />

        </Routes>

      </ContentWrapper>
      {/* Footer */}

    </Router>
  )
}

export default App
