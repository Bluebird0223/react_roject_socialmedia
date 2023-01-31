import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import './style.scss'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  // Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";


function App() {
  const currentUser = useContext(AuthContext);

  const {darkMode} = useContext (DarkModeContext)
  

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark': 'light'}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{flex:6}}>

          <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };
  const ProtectRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRoute>
          <Layout />
        </ProtectRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />

    </div>
  
  );
}

export default App;
