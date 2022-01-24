import React from "react";
import ReactDOM from "react-dom";

//----------------Class based Component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <div>latitude : {this.state.lat}</div>;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>error : {this.state.errorMessage}</div>;
    }
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
