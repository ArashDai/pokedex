var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var Routes = (

    <Route path='/' component={require('./components/App')} >

      <IndexRoute component={require('./components/MainPage')} />

       <Route path='/about' component={require('./components/About')}/>

    </Route>

  );

module.exports = Routes;
