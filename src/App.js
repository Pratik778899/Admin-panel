import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Components/Auth/Login";
import UserManagement from "./Pages/UserManagement/UserManagement";
import UserReports from "./Pages/UserReports/UserReports";
import Question from "./Pages/Question/Question";
import { useSelector } from "react-redux";

function App() {
  const isloggedIn = useSelector(state => state.Reducer.isLogged);
  // console.log(isloggedIn);

  function PrivateRoute({ element }) {
    return isloggedIn ? element : <Navigate to="/Login" />;
  }

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
            <Route
              path="/UserManagement"
              element={<PrivateRoute element={<UserManagement />} />}
            />
            <Route
              path="/Question"
              element={<PrivateRoute element={<Question />} />}
            />
            <Route
              path="/UserReports"
              element={<PrivateRoute element={<UserReports />} />}
            />
            <Route path="/Login" element={!isloggedIn && <Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
