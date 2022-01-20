import React from "react";
import UserPageCard from "../components/UserDetails";
import GoBackButton from "../components/BackButton";

class UserPage extends React.Component {
  render() {
    return (
      <div className="userPage">
        <header className="app-header">
          <span className='page-title'>User Profile</span>
        </header>
        <div className="user-page-content">
          <UserPageCard />
          <GoBackButton />
        </div>
      </div>
    )
  }
}

export default UserPage;