// import './App.css'
import { lazy, Suspense } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TicketScreen from './screens/dashboard/tickets/ticket';
import Overview from './screens/dashboard/overview/overview';
import Profile from './screens/profile/profile';
const DashboardScreen = lazy(() => import('./screens/dashboard/dashboard'));
const AboutScreen = lazy(() => import('./screens/about/about'));
const Home = lazy(() => import('./screens/home/home'));
const Layout = lazy(() => import('./screens/layout'));
function App() {
  const routes = createBrowserRouter([

    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "about", element: <AboutScreen /> },
        { path: "services", element: <div>Services</div> },
        { path: "support", element: <div>Support</div> },
        { path: "login", element: <div>Login</div> },
        { path: "signup", element: <div>Signup</div> },
        {
          path: "user/:id", element: <DashboardScreen />, children: [
            { index: true, element: <Overview /> },
            { path: "leads", element: <div>Leads</div> },
            { path: "sales", element: <div>Sales</div> },
            { path: "tickets", element: <TicketScreen /> },
            { path: "tasks", element: <div>Tasks</div> },
            { path: "services", element: <div>Services</div> },
            { path: "profile", element: <Profile/> },
          ]
        }
      ],
    },
  ]);
  return (
    <Suspense fallback={<TailSpin color="#00BFFF" height={80} width={80} />}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
