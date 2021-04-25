import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Posts from '../containers/post'
import Users from '../containers/user'
import Home from '../containers/Home'
const Routes = () => {
  return (
    <Switch>
      <Route path="/post" component={Posts}></Route>

      <Route path="/user" component={Users}></Route>
      <Route path="/" component={Home}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default Routes
