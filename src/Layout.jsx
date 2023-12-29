import React from "react";
// import Nav from "./Common/Nav/Nav";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { navOpen } from "./Store/Action/Index";
import "./Components/Sidebar/Sidebar.css";

const Layout = props => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.Reducer.navIsOpen);
  // console.log(selector);

  const handleToggle = () => {
    dispatch(navOpen(!selector));
  };
  return (
    <>
      {/* <Nav /> */}
      <div style={{ display: "flex" }}>
        <div id="sidebar-container">
          {selector && <Sidebar />}
          <div id="menu" onClick={handleToggle}>
            <i className={`ri-${selector ? "" : "arrow-drop-right-line"}`}></i>
          </div>
        </div>
        <div id="content">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
