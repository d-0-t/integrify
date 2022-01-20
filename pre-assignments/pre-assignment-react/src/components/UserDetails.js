import React from "react";
import { useParams } from "react-router-dom";

class UserPageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  
  componentDidMount() {
    let id = window.location.pathname.split("/").pop();
    this.loadData(id);
  }
  
  loadData(id) {
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json())
    .then(user  => {
        this.setState({
          data: user,
          id: user.id,
          avatar: user.name[0],
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          company: user.company.name,
          website: user.website,
          address: {
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode
          }
        });
    })  
  }
  render() {
    if (!this.state.data) {
      return <div>Loading user details...</div>
    }
    return (
      <div className="user-page-card">
        <div className="avatar">{this.state.avatar}</div>
        <div className="user-info">
          <span className="user-info-title">Name:</span>
          <span className="user-info-detail">{this.state.name}</span>
        </div>
        <div className="user-info">
          <span className="user-info-title">Username:</span>
          <span className="user-info-detail">@{this.state.username}</span>
        </div>
        <div className="user-info">
          <span className="user-info-title">Email:</span>
          <a href={"mailto:"+this.state.email}>
            <span className="user-info-detail">{this.state.email}</span>
          </a>
        </div>
        <div className="user-info">
          <span className="user-info-title">Phone:</span>
          <span className="user-info-detail">{this.state.phone}</span>
        </div>
        <div className="user-info">
          <span className="user-info-title">Company:</span>
          <span className="user-info-detail">{this.state.company}</span>
        </div>
        <div className="user-info">
          <span className="user-info-title">Website:</span>
          <a href={"http://" + this.state.website} target="_blank" rel="noreferrer"><span className="user-info-detail">http://{this.state.website}</span></a>
        </div>
        <div className="user-info">
          <span className="user-info-title">Address:</span>
            <ul className="user-info-detail-address">
              <li>{this.state.address.street}</li>
              <li>{this.state.address.suite}</li>
              <li>{this.state.address.city}</li>
              <li>{this.state.address.zipcode}</li>
            </ul>
        </div>
      </div>
    )
  }
}

export default UserPageCard;