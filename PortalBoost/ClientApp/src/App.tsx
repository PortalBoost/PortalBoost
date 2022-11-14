import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
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


function App() {

  const validLogin = useRecoilValue(successfullLogin)
  const getData = useFetchData();

  // TODO: Reusable modal component
  // TODO: EmployeePreview minimalistic rounded version
  // TODO: Rounded typical "Avatar"-style profile picture for previews. Larger image on expanded modal. 
  useEffect(() => {
    console.log(validLogin)
    const users = getData.getUsers();
    console.log(users)
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
