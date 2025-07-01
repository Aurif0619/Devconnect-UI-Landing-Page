import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import Dashboard from './components/dashboard/Dashboard';
import DeveloperLogin from './components/pages/login/dev-log/DeveloperLogin';
import UserLogin from './components/pages/login/user-log/UserLogin';
import DeveloperSignup from './components/pages/signup/dev-signup/DeveloperSignup';
import UserDevSelection from './components/user-dev-selection-page/UserDevSelection';
import Navbar from './components/navbar/Navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <LandingPage />
      </>
    ),
  },
  {
    path: '/selection',
    element: (
      <>
        <Navbar />
        <UserDevSelection />
      </>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
  },
  {
    path: '/login/dev',
    element: (
      <>
        <Navbar />
        <DeveloperLogin />
      </>
    ),
  },
  {
    path: '/login/user',
    element: (
      <>
        <Navbar />
        <UserLogin />
      </>
    ),
  },
  {
    path: '/signup/dev',
    element: (
      <>
        <Navbar />
        <DeveloperSignup />
      </>
    ),
  },
  {
    path: '/signup/user',
    element: (
      <>
        <Navbar />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
