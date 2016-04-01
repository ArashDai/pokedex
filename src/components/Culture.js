var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;


var Culture = React.createClass({
 

  render:function(){
    return(

     <div className='Culture container-fluid'>
        <a name='cultureDom'></a>

        <div className='col-xs-12 col-sm-6' id='CultureText'> 
          <h1 className='text-center'>Simple</h1>
            <br></br>
          <h1 className='text-center'>Mobile</h1>
            <br></br>
          <h1 className='text-center'>Custom</h1>
            <br></br>
        </div>

        <div className='col-xs-12 col-sm-6  ' id='CultureText'>
          <p>we have a passion for creating great user experiences, clean designs that leave a lasting impression for your users </p>
        </div>

     </div> 
    )
  }
});

module.exports = Culture;