import React from 'react';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import MainPage from './MainPage/MainPage';
import LoginPage from './LoginPage/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: < MainPage></MainPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  }
]);

function App() {
  return (
    < RouterProvider router={router} />
  );
}

export default App;
