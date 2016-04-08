var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;

var Intro = require('./Intro.js');

var Search = require('./Search.js');
var About = require('./About');
var ContactUs = require('./ContactUs');

var MainPage = React.createClass({

  render:function(){
    return(
      <div className='MainPage container-fluid'>
      
          <Intro/>

          <Search/>
          <About/>
          <ContactUs/>

      </div> 
  )}

});

module.exports = MainPage;


