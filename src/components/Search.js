var React = require('react');
var ReactDOM = require('react-dom');



var Search = React.createClass({

  render:function(){
    return(
      
      <div className='container-fluid text-center Portfolio' >
        <a name='portfolioDom'></a>
         <h2 className='text-center col-xs-12'>Search</h2>
         <p className='text-center'> search box </p>
         <p className='text-center'>checkbox: search by name,type,attack </p>
         <p className='text-center'> results rendered here  5 at a time until you click more then 5 more show</p>
         
      </div>

      )
  }

});


module.exports = Search;