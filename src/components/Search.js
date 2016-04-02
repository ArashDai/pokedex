var React = require('react');
var ReactDOM = require('react-dom');



var Search = React.createClass({

  getInitialState:function(){
    return{
      searchValue: null,
      searchType: 'name'
    }
  },

  search:function(userInput){
    

  },

  storeInput:function(userInput){
    var data = {
      searchValue: userInput.target.form[0].value
    }

    this.setState({searchValue: userInput.target.form[0].value}); 

  },

  queryType:function(x){
    if(x.target.value === 'name'){
      this.setState({searchType:'name'})
    }
    if(x.target.value === 'type'){
      this.setState({searchType:'type'})
    }
    if(x.target.value === 'attack'){
      this.setState({searchType:'attack'})
    }
  },

  render:function(){
    return(
      
      <div className='container-fluid text-center Portfolio' >
        <a name='portfolioDom'></a>
         <h2 className='text-center col-xs-12'>Search</h2>
          
          <form>
            <input name='query'className='center-block' type='textbox' />
            <p className='text-center'>Search by name,type,attack </p>
    
              <button type="button" onClick={this.storeInput} className="center-block btn btn-warning">Search</button>
          </form>


              <button onClick={this.queryType} name='searchChoice' type='button' value='name'> Name </button>
              <button onClick={this.queryType} name='searchChoice' type='button' value='type'> Type </button>
              <button onClick={this.queryType} name='searchChoice' type='button' value='attack'> Attack </button>

         
         <p className='text-center'> results rendered here 5 at a time until you click more then 5 more show</p>
         <div id='data1'></div>
         

      </div>

    )
  }

});


module.exports = Search;