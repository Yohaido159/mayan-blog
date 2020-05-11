import React from "react";
import ReactDOM from "react-dom";
import "./Portal.styles.scss";

const rootModal = document.getElementById("root-modal");

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    rootModal.appendChild(this.el);
  }

  componentWillUnmount() {
    rootModal.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;
