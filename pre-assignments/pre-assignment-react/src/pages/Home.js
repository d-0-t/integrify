import React from "react";
import HomeUserCards from "../components/HomeCards";

class Home extends React.Component {
  render() {
    return (
      <div className="homePage">
        <header className="app-header">
          <span className='page-title'>All Users</span>
        </header>
        <HomeUserCards />
      </div>
    )
  }
}

export default Home;