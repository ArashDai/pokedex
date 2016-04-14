var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var Header = require('./Header');
var Footer = require('./Footer');

var App = React.createClass({

  render:function(){
    return(

      <div className='container-fluid App'>

        <Header/>
        {this.props.children}
        <Footer/>
         
      </div>
    )}
});


module.exports = App;