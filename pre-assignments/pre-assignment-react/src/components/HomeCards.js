import React from "react";

class HomeUserCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(dataObj  => {
        this.setState({
          data: dataObj
      })
    })  
  }
  render() {
    if (!this.state.data) {
      return <div>Loading users...</div>
    }
    let userCards = this.state.data.map((user) =>
    <div className="card" key={user.id}>
       <div className='user-details-home'>
          <div className='avatar noselect'>{user.name[0]}</div>
          <div className='user-fullname'>{user.name}</div>
          <div className='user-username'>@{user.username}</div>
          <div className='user-url'>
            <a href={"http://" + user.website} target="_blank">http://{user.website}</a>
          </div>
      </div>
      <a href={"/users/" + user.id}>
        <div className='btn noselect'>More details</div>
      </a>
    </div>
    );

    return (
      <div className='home-cards'>
        {userCards}
      </div>
    )
  }
}


export default HomeUserCards;





/*
//CARD PROTOTYPE:

        <div className="card">
          <div className='user-details-home'>
            <div className='avatar noselect'>X</div>
            <div className='user-fullname'>Xena Princess</div>
            <div className='user-username'>@XenaPrincess</div>
            <div className='user-url'>
              <a href="https://google.com">http://xena.me</a>
            </div>
          </div>
          <div className='btn-more noselect'>More details</div>
        </div>

*/