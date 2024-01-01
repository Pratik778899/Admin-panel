import React, { useState, useEffect } from "react";
import "./UserManagement.css";
import User from "./User.json";
import PremiumUser from "./PremiunUser.json";

const UserManagement = () => {
  const [pages, setPages] = useState(1);
  const [filter, setFilter] = useState("all");
  const [users, setUsers] = useState(User.users);
  const [premiumUsers, setPremiumUsers] = useState(PremiumUser.Premiumusers);

  const handlePages = x => {
    setPages(x);
  };

  const handleFilter = filterType => {
    setFilter(filterType);
  };

  const handleDeleteUser = id => {
    if (pages === 1) {
      const updatedUserList = users.filter(item => item.id !== id);
      setUsers(updatedUserList);
    } else if (pages === 2) {
      const updatedPremiumUserList = premiumUsers.filter(
        item => item.id !== id
      );
      setPremiumUsers(updatedPremiumUserList);
    }
  };

  const filteredUsers =
    pages === 1
      ? users.filter(
          user =>
            filter === "all" ||
            user.league.toLowerCase() === filter.toLowerCase()
        )
      : premiumUsers.filter(
          user =>
            filter === "all" ||
            user.league.toLowerCase() === filter.toLowerCase()
        );

  useEffect(() => {
    setUsers(User.users);
    setPremiumUsers(PremiumUser.Premiumusers);
  }, []);

  return (
    <div id="user-management">
      <div id="userPages">
        <div onClick={() => handlePages(1)} id="tab1">
          User
        </div>
        <div onClick={() => handlePages(2)} id="tab2">
          Premium User
        </div>
      </div>
      <div id="components">
        {pages === 1 ? (
          <div id="user-container">
            <div className="flex item-center justify-content m-2">
              <h1>User</h1>
              <div>
                <button className="button" onClick={() => handleFilter("all")}>
                  All User
                </button>
                <button
                  className="button"
                  onClick={() => handleFilter("diamond")}
                >
                  Diamond User
                </button>
                <button
                  className="button"
                  onClick={() => handleFilter("platinum")}
                >
                  Platinum User
                </button>
              </div>
            </div>
            <div id="user-main">
              <div id="user-header" className="m-2">
                <h4>ID</h4>
                <h4>Name</h4>
                <h4>League</h4>
                <h4>Delete User</h4>
              </div>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((item, index) => (
                  <div id="userdata" key={item.id + index}>
                    <div id="box">
                      <h4>{item.id}</h4>
                    </div>
                    <h4>{item.name}</h4>
                    <h4>{item.league}</h4>
                    <button
                      onClick={() => handleDeleteUser(item.id)}
                      className="button"
                    >
                      Delete User
                    </button>
                  </div>
                ))
              ) : (
                <div id="no-users-message">
                  <p>No users found.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div id="user-container">
            <div className="flex item-center justify-content m-2">
              <h1>Premium User</h1>
            </div>
            <div id="user-main">
              <div id="user-header" className="m-2">
                <h4>ID</h4>
                <h4>Name</h4>
                <h4>Validity</h4>
                <h4>League</h4>
                <h4>Delete User</h4>
              </div>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((item, index) => (
                  <div id="userdata" key={item.id + index}>
                    <div id="box">
                      <h4>{item.id}</h4>
                    </div>
                    <h4>{item.name}</h4>
                    <h4>{item.validity}</h4>
                    <h4>{item.league}</h4>
                    <button
                      onClick={() => handleDeleteUser(item.id)}
                      className="button"
                    >
                      Delete User
                    </button>
                  </div>
                ))
              ) : (
                <div id="no-users-message">
                  <p>No users found.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
