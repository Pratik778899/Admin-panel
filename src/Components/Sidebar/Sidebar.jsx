import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogged, navOpen, toggleSidebarItem } from "../../Store/Action/Index";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.Reducer.navIsOpen);
  const isLoggedIn = useSelector(state => state.Reducer.isLogged);
  const selectedSidebarItem = useSelector(
    state => state.Reducer.selectedSidebarItem
  );

  const handelLogout = () => {
    localStorage.removeItem("LoggedUser");
    dispatch(isLogged(false));
    navigate("/Login");
  };

  const handleItemClick = itemName => {
    dispatch(
      toggleSidebarItem(
        itemName === selectedSidebarItem ? "Dashboard" : itemName
      )
    );
  };

  const isItemSelected = itemName => {
    return itemName === selectedSidebarItem ? "selected" : "Dashboard";
  };

  const handleToggle = () => {
    dispatch(navOpen(!selector));
  };

  return (
    <>
      <div className="glow"></div>
      {isLoggedIn && (
        <div className="sidebar">
          <div id="slide-content" className="text">
            <div id="logo">
              <h1 className="text-grade">BKC</h1>
              <div id="menu" className="text" onClick={handleToggle}>
                <i
                  className={`ri-${selector ? "arrow-drop-left-line" : ""}`}
                ></i>
              </div>
            </div>
            <h2
              className={`pointer ${isItemSelected("Dashboard")}`}
              onClick={() => handleItemClick("Dashboard")}
            >
              <Link className="link" to="/">
                Dashboard
              </Link>
            </h2>
            <h2 className="pointer">Progress</h2>
            <ul>
              <li
                className={`pointer ${isItemSelected("user-management")}`}
                onClick={() => handleItemClick("user-management")}
              >
                <Link className="link" to="/UserManagement">
                  User Management
                </Link>
              </li>
            </ul>
            <h2 className="pointer">Question Management</h2>
            <ul>
              <li
                className={`pointer ${isItemSelected("Question")}`}
                onClick={() => handleItemClick("Question")}
              >
                <Link className="link" to="/Question">
                  Question
                </Link>
              </li>
            </ul>
            <h2 className="pointer">Reports</h2>
            <ul>
              <li
                className={`pointer ${isItemSelected("User Reports")}`}
                onClick={() => handleItemClick("User Reports")}
              >
                <Link className="link" to="/UserReports">
                  User Reports
                </Link>
              </li>
            </ul>
          </div>

          <div id="logout-main" className="text">
            {isLoggedIn ? (
              <div id="logout" onClick={handelLogout}>
                <i className="ri-logout-box-r-line"></i>
                <h1 className="pointer m-2">Logout</h1>
              </div>
            ) : (
              <div id="Login-slider">
                <i class="ri-login-box-line"></i>
                <h1 className="pointer m-2">Login</h1>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
