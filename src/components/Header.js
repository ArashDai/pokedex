var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;

var Route = Router.Route;

var Header = React.createClass({

  render:function(){

    return(
          <div className='PageHeader'>
            <p id='MainHeaderNormal'className='text-center'>POKEDEX</p>
          </div> 
    )}

})


module.exports = Header;