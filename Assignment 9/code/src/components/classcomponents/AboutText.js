import React from "react";

class AboutText extends React.Component {
  constructor(props) {
    // console.log("child constructor");
    super(props);
  }
  componentDidMount(){
    // console.log("child component mounted successfully");
  }
  render() {
    // console.log("child render");
    return (
      <div className="container d-flex justify-content-center align-center">
        <h3 className="display-3 text-white">{this.props.title}</h3>
      </div>
    );
  }
}
export default AboutText;
