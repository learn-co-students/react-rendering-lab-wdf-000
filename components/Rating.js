const React = require('react');

class Rating extends React.Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.rating > this.props.rating) {
      this.setState({
        increasing: true
      });
    } else if(nextProps.rating < this.props.rating) {
      this.setState({
        increasing: false,
        decreasing: true
      });
    } else {
      this.setState({
        increasing: false,
        decreasing: false
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

module.exports = Rating;
