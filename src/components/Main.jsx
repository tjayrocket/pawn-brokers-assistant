import React from 'react';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div id="main">
        Likes : <span>{this.state.likesCount}</span>
        <div><button className="button" onClick={this.onLike}>Like Me</button></div>
      </div>
    );
  }

}

export default Main;