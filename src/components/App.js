var React = require('react');


var Header = require('./Header');
var Search = require('./Search');
var About = require('./About');

var App = React.createClass({

  render:function(){
    return(

      <div className='container-fluid App'>

        <Header/>
        <Search/>
        <About/>
         
      </div>
    )}
});


module.exports = App;