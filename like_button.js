'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Жизнь'
    );
  }
}

let lifeElement = document.getElementById('life');
const root = ReactDOM.createRoot(lifeElement);
root.render(e(LikeButton));