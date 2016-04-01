var React = require('react');


var About = React.createClass({
  render:function(){
    return(
      
      <div className='container-fluid Card'>

        <h2 className='text-center'>About</h2>

        <p className='text-center col-xs-12 col-sm-6 col-sm-offset-3'>
          This application is built with React.js using the v2 pokeAPI
          checkout the code here: github link
        </p>  
     
      </div>
  )}

});


module.exports = About;

