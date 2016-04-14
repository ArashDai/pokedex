var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;


var PokemonStats = React.createClass({
 


  render:function(){
    return(
     <div className='PokemonStats container-fluid'>
        <img src='null' className='col-xs-12 col-sm-6'/>
        
        <div id='PokeInfo'>
          <div className='col-xs-12 col-sm-6'>
              <h1>{this.props.info.name}</h1>
              <p>{this.props.info.id}</p>
              <p>types</p>
              <p>Height: {this.props.info.height}</p>
              <p>Weight: {this.props.info.weight}</p>
              <p>HP:</p>
              <p>Speed:</p>
              <p>Attack:</p>
              <p>Defense:</p>
              <p>Special Attack:</p>
              <p>Special Defense:</p>
          </div>
        </div>

     </div> 
    )
  }
});

module.exports = PokemonStats;