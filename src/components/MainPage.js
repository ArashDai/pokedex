var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;

var Search = require('./Search.js');
var About = require('./About');


var MainPage = React.createClass({

  render:function(){
    return(
      <div className='MainPage container-fluid'>
          <Search/>
          <About/>
      </div> 
  )}

});

module.exports = MainPage;


