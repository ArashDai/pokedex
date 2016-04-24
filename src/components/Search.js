var React = require('react');
var ReactDOM = require('react-dom');
var PokemonStats = require('./PokemonStats');
var $ = require('jquery');


var Search = React.createClass({

  getInitialState:function(){
    return{
      searchType: 'name',
      data:null
    }
  },

  search:function(userInput){
    let searchValue = userInput.target.form[0].value;
    
    if(this.state.searchType==='name'){
      var query = 'http://pokeapi.co/api/v2/pokemon/'+searchValue+'/'
    }
    if(this.state.searchType==='type'){
      var query = 'http://pokeapi.co/api/v2/type/'+searchValue+'/'
    }
    if(this.state.searchType==='attack'){
      var query = 'http://pokeapi.co/api/v2/move/'+searchValue+'/'
    }


    $.get(query, response =>{
      this.setState({data:response});
    })
    
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

            <div id='searchbuttons'>
              <button onClick={this.queryType} name='searchChoice' type='button' value='name'> Name </button>
              <button onClick={this.queryType} name='searchChoice' type='button' value='type'> Type </button>
              <button onClick={this.queryType} name='searchChoice' type='button' value='attack'> Attack </button>
            </div>

            <form>
              <div className='center-block'>
                <input id='searchbox' name='query' type='textbox' />

                <button id='searchbutton' type="button" onClick={this.search} className="center-block">Search</button>
              </div>
            </form>

          <br/>
        
        {this.state.data ?
          <PokemonStats info={this.state.data}/> :
          null
        }
         
         

      </div>

    )
  }

});


module.exports = Search;