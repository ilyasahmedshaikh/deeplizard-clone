import React from 'react';
import './App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';

import Home from './components/Home';
import Code from './components/Code';
import Hivemind from './components/Hivemind';
import Vlog from './components/Vlog';

import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { connect } from "react-redux";

import {
  GetUsers
} from "./redux/actions/taskAction";

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
    // making all API calls and store in the redux-store
    this.props.GetUsers();
  }

  render() {
    console.log("this.props.tasksss ", this.props.Loading);

    return (
      <Router>
        <div className="App">
          <Header />
            
            {/* all components */} 
            <div>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/react-boilerplate'}>
                  <Redirect to={process.env.PUBLIC_URL + '/login'} />
                </Route>
  
                <Route exact path="/">
                  <Redirect to={process.env.PUBLIC_URL + '/login'} />
                </Route>
  
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/home'} component={Home}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/code'} component={Code}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/hivemind'} component={Hivemind}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/vlog'} component={Vlog}></Route>
              </Switch>
            </div>
  
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  Loading: state.task.loading
});

const mapDispacthToProps = dispatch => {
  return {
    GetUsers: () => dispatch(GetUsers())    
  };

};
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(App);
