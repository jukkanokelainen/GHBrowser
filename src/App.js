import './App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubProvider from './Context/Github/GithubProvider.js';
import Navbar from './Components/Layout/Navbar.js';
import Search from './Components/Layout/Search.js';
import Alarm from './Components/Layout/Alarm.js';
import Users from './Components/Users/Users.js';
import User from './Components/Users/User.js';
import About from './Components/Pages/About.js';

class App extends Component {
  state = {
    alarm: null,
  }

  setAlert = (text, type) => {
    this.setState({ alarm: { text: text, type: type } });
    setTimeout(() => {
      this.setState({ alarm: null });
    }, 5000);
  }

  render() {
    const { alarm } = this.state;
    return (
      <GithubProvider>
        <Router>
          <div className="App">
            <Navbar />
            <div className='container'>
              <Alarm alarm={alarm} />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={props => (
                    <Fragment>
                      <Search
                        setAlert={this.setAlert}
                      />
                      <Users />
                    </Fragment>
                  )
                  } />
                <Route exact path='/about' component={About} />
                <Route
                  exact
                  path='/user/:login' //tämä login on parametrin nimi, jolla pystyy user-luokan sisällä katsomaan mikä käyttäjä on kyseessä käyttäen match-propsia
                  component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </GithubProvider>
    );
  }
}

export default App;
