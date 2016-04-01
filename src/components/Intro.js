var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;


var Intro = React.createClass({
 

  render:function(){
    return(

    <div className='Intro container-fluid'>

        <h2 className='text-center introHeader'> Catch 'Em All </h2>

    </div> 
    )
  }
});

module.exports = Intro;