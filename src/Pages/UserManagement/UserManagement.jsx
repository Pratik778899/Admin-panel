import React, { useState, useEffect } from "react";
import "./UserManagement.css";
import User from "./User.json";
import PremiumUser from "./PremiunUser.json";

const UserManagement = () => {
  const [filter, setFilter] = useState("all");
  const [users, setUsers] = useState(User.users);
  const [premiumUsers, setPremiumUsers] = useState(PremiumUser.Premiumusers);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = tabNumber => {
    setActiveTab(tabNumber);
  };

  const handleFilter = filterType => {
    setFilter(filterType);
  };

  const handleDeleteUser = id => {
    if (activeTab === 1) {
      const updatedUserList = users.filter(item => item.id !== id);
      setUsers(updatedUserList);
    } else if (activeTab === 2) {
      const updatedPremiumUserList = premiumUsers.filter(
        item => item.id !== id
      );
      setPremiumUsers(updatedPremiumUserList);
    }
  };

  const filteredUsers =
    activeTab === 1
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
    <>
        <div className="glow-round"></div>
      <div id="user-management" className="relative">
        <div id="userPages">
          <div
            onClick={() => handleTabClick(1)}
            id="tab1"
            className={activeTab === 1 ? "activeTab" : ""}
          >
            User
          </div>
          <div
            onClick={() => handleTabClick(2)}
            id="tab2"
            className={activeTab === 2 ? "activeTab" : ""}
          >
            Premium User
          </div>
        </div>
        <div id="components">
          {activeTab === 1 ? (
            <div id="user-container">
              <div className="flex item-center justify-content m-2">
                <h1>User</h1>
                <div>
                  <button
                    className="button"
                    onClick={() => handleFilter("all")}
                  >
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
      <div className="glow-round-right"></div>
    </>
  );
};

export default UserManagement;
