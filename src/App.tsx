import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Router, RouterProvider, Routes, createBrowserRouter, useNavigate } from 'react-router-dom';
import './App.scss';
import MainPage from './MainPage/MainPage';
import LoginPage from './LoginPage/LoginPage';
import { CognitoUserSession, CognitoUser } from 'amazon-cognito-identity-js'
import { Auth } from 'aws-amplify';
import PrivateRoute from './GlobalComponents/ProtectedRoute/ProtectedRoute';

let user: CognitoUser | null = null;
function App() {

  const [userDataGathered, setUserDataGathered] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  async function getUserSession(): Promise<boolean> {
    let isSignedIn: boolean = false;

    Auth.currentAuthenticatedUser()
      .then(
        (userData) => {
          console.log("Logged in!");
          setUser(userData);
          isSignedIn = true;
        },
        (err) => {
          console.log("Could not get user data ", err.message)
          isSignedIn = false;
        }
      );
    return isSignedIn;
  }

  useEffect(() => {
    (async function () {
      if (!signedIn) {
        try {
          const user = await Auth.currentAuthenticatedUser();
          setUser(user);
          console.log(user);
          setSignedIn(true);
        }
        catch (error) {
          console.log("Login Failed... Redirecting");
          setSignedIn(false);
        }
      }
      setUserDataGathered(true);
    }())
  });

  if (userDataGathered) {
    return (<BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute signedIn={signedIn}> <MainPage user={user} /> </PrivateRoute>} />
        <Route path="/login" element={<LoginPage onUserSigninSuccess={setSignedIn} />} />
      </Routes>
    </BrowserRouter>)
  }
  return <div></div>

}

export default App;
