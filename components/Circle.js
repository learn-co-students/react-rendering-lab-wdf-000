const React = require('react');

class Circle extends React.Component {
  shouldComponentUpdate(nextProp, nextState){
    nextProp !== this.prop
    //returns true if new color passed in is differnt from previous color
  }



  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

module.exports = Circle;
