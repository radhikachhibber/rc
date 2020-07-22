import React, { Component } from 'react'
import { Link, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      active :-1,
      items :["EXPERIENCE","SKILLS","PROJECTS"]
    }
  }
  handleItemClick(index) {
    this.setState({
      activeItem: index,
    })
  }
  render(){
    return (
    <nav id="navbar" className="push better-nav p-2">
      <div className="container">
        <div className="head">
          <a href="" className="brand">
            <div className="logo">
              <img src={require('../Media/Profile.jpg')} width="85" height="85"/>
            </div>
            <div className="title">
              <h3>RADHIKA CHHIBBER</h3>
            </div>
          </a>
        </div>
        <div className="body">
          <ul>
          {this.state.items.map((item, index) =>
            <li
              key={index}
              className={this.state.activeItem === index ? 'active' : ''}
              onClick={this.handleItemClick.bind(this, index)}
            >
              <Link to={item}>{item}</Link>
            </li>
          )}
          </ul>
        </div>
      </div>
    </nav>
  )
  }
}

class Header extends Component {
  render() {
    return (
        <BrowserRouter>
        <NavBar />
          <Route exact path="/" render={() => (
            <Redirect to="/Experience" />
          )} />
          <Switch>
            <Route exact path="/Experience" component={Experience} />
            <Route exact path="/Skills" component={Skills} />
            <Route exact path="/Projects" component={Projects} />
          </Switch>
        </BrowserRouter>
    )
  }
}
export default Header