import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './MainPage/MainPage';
import LoginPage from './LoginPage/LoginPage';
import { CognitoUser } from 'amazon-cognito-identity-js'
import { Auth } from 'aws-amplify';
import PrivateRoute from './GlobalComponents/ProtectedRoute/ProtectedRoute';

let user: CognitoUser | null = null;
function App() {

  const [userDataGathered, setUserDataGathered] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [signOutRequested, setSignOutRequested] = useState(false);
  const [user, setUser] = useState<CognitoUser | null>();

  function onSignIn(user: CognitoUser) {
    setSignedIn(true);
    setUser(user);
  }

  function onSignOut() {
    setSignOutRequested(true);
  };

  useEffect(() => {
    (async function () {
      if (user == undefined) {
        try {
          const user = await Auth.currentAuthenticatedUser();
          setUser(user);
          setSignedIn(true);
        }
        catch (error) {
          setUser(null);
          console.log("Login Failed... Redirecting");
          setSignedIn(false);
        }
        finally {
          setUserDataGathered(true);
        }
      }
      else {
        setSignedIn(true);
      }
    }())
  });

  useEffect(() => {
    (async function () {
      if (signOutRequested) {
        try {
          await Auth.signOut();
        }
        catch (err) {
          console.log("Failed to sign out");
        }
        finally {
          setSignOutRequested(false);
          setSignedIn(false);
          setUser(null);
        }
      }
    }())
  });

  if (user !== undefined && !signOutRequested) {
    return (<BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute signedIn={signedIn}> <MainPage user={user} onSignOut={onSignOut} /> </PrivateRoute>} />
        <Route path="/login" element={<LoginPage signedIn={signedIn} onUserSigninSuccess={setUser} />} />
      </Routes>
    </BrowserRouter>)
  }
  return (<div></div>)
}

export default App;
