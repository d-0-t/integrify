import React from "react";

class GoBackButton extends React.Component {
  render() {
    return (
      <a href={"/"}>
      <div className='btn noselect'>Go back</div>
      </a>
    )
  }
}

export default GoBackButton;