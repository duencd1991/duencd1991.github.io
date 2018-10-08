import React, { Component } from "react";
import "./App.scss";
import Routes from '../src/Routes';
import { history } from '../src/helper';
import { connect } from "react-redux";
import { clear } from "../src/redux/actions";

class App extends Component {

  constructor(props) {
    super(props);

    history.listen((location, action) => {
      this.props.clear();
    });
  }

  render() {
    return (
      <div>
        <div id="content">
          <Routes history={history} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  alert: state.alert
});

const mapDispatchToProps = dispatch => {
  return {
    clear: () => {
      dispatch(clear());
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);