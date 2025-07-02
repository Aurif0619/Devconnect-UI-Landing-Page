import React from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import Dashboard from './components/dashboard/Dashboard';
import DeveloperLogin from './components/pages/login/dev-log/DeveloperLogin';
import UserLogin from './components/pages/login/user-log/UserLogin';
import DeveloperSignup from './components/pages/signup/dev-signup/DeveloperSignup';
import UserDevSelection from './components/user-dev-selection-page/UserDevSelection';
import Navbar from './components/navbar/Navbar';
import UserSignup from './components/pages/signup/user-signup/UserSignup';
import ProfilePage from './components/pages/profile/ProfilePage';
import ProjectDetailPage from './components/pages/project-detail/ProjectDetailPage';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/selection',
        element: <UserDevSelection />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/signup/dev',
        element: <DeveloperSignup />,
      },
      {
        path: '/login/dev',
        element: <DeveloperLogin />,
      },
      {
        path: '/signup/user',
        element: <UserSignup />,
      },
      {
        path: '/login/user',
        element: <UserLogin />,
      },
      {
        path: '/profile',
        element: <ProfilePage />
      },
      {
        path: '/project-detail',
        element: <ProjectDetailPage />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;