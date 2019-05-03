import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import '../App.css';
import Help from './Help'
import UserLogin from '../components/UserLogin'
import NotFound from '../components/NotFound'



class App extends Component {
  state = {
    currentUser: null,
    loading: true
  }
  
  handleUserLogin = (username, password) => {
    fetch(`http://localhost:3001/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(res => res.json())
      .then(data => {
        // console.log(data)
        if (data.error) {
          // console.log(data)
          alert('Incorrect username or password')
        } else {
          // console.log(data)
          this.setState({ currentUser: data.user })
          localStorage.setItem("main_token", data.token)
        }
      })
  }

  componentDidMount() {
    let token = localStorage.getItem('main_token')
    if (token) {
      fetch(`http://localhost:3001/api/v1/profile`, {
        method: "GET",
        headers: {
          "Authentication": `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            currentUser: data,
            loading: false
          })
        })
    } else {
      this.setState({ loading: false })
    }
  }

  handleLogOut = () => {
    this.setState({
      currentUser: null
    })
    localStorage.clear()
  }

  render() {
    return (
      <Fragment>
        {!this.state.loading ?
          <Switch>
            <Route exact path="/" render={() => <Redirect to='/UserLogin' />} />

            <Route exact path="/Help" render={() => {
              return this.state.currentUser ?
                <Help
                  logged_in = {this.state.currentUser}
                  onLoading = {this.state.loading}
                  onLogIn = {this.handleUserLogin}
                  onLogOut = {this.handleLogOut}
                />
                :
                <Redirect to='/UserLogin' />
            }}
            />

            <Route exact path="/UserLogin" render={() => {
              return this.state.currentUser ? <Redirect to='/Help' />
                :
                <UserLogin onLogIn={this.handleUserLogin} />
            }}
            />
           
            <Route component={NotFound} />

          </Switch> : null
        }
      </Fragment>
    );
  }
}

export default App;
