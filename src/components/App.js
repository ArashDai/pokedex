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

        <div className="pure-container" data-effect="pure-effect-slideAlong">

          <input type="checkbox" id="pure-toggle-right" className="pure-toggle" data-toggle="right"/>

          <label className="pure-toggle-label" htmlFor="pure-toggle-right" data-toggle-label="right">
            <span className="pure-toggle-icon"></span> 
          </label> 

          <div className="pure-drawer" data-position="right">
            
            <h1 className='drawerHeader'>POKEDEX</h1>

            <ul className='col-xs-12 DrawerNav'>
              <li className='text-center'><a href='#cultureDom'>Search</a></li>
                <br/>
              <li className='text-center'><a href='#portfolioDom'>About</a></li>
                <br/>
              <li className='text-center'><a href='#contactDom'>Contact</a></li>
            </ul>

          </div>

          <div className="pure-pusher-container">
              <div className="pure-pusher">

                  <Header/>

                  {this.props.children}
                     
                  <Footer/>
                  
             </div>
          </div>

           <label className="pure-overlay" htmlFor="pure-toggle-right" data-overlay="right">
           </label>
          </div>

      </div>
    )}
});


module.exports = App;