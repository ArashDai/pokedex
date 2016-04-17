var React = require('react');
var EvoChain = require('./EvoChain')

var PokemonStats = React.createClass({
 
 getInitialState:function(){
   return{
      types:[],
      hp:null,
      speed:null,
      attack:null,
      defense:null,
      spAttack:null,
      spDefense:null
   }
 },
 
 componentWillReceiveProps: function(nextProps){
        // Not called for the initial render
        // Previous props can be accessed by this.props
        // Calling setState here does not trigger an an additional re-render
    this.state.types = [];    
 },

 
 render:function(){
    this.props.info.types.forEach(x => { this.state.types.push(x.type.name) })
    
    this.props.info.stats.forEach(x => { 
      if(x.stat.name==='hp'){ this.state.hp = x.base_stat  }
      if(x.stat.name==='speed'){ this.state.speed = x.base_stat  }
      if(x.stat.name==='attack'){ this.state.attack = x.base_stat  }
      if(x.stat.name==='defense'){ this.state.defense = x.base_stat  }
      if(x.stat.name==='special-attack'){ this.state.spAttack = x.base_stat  }
      if(x.stat.name==='special-defense'){ this.state.spDefense = x.base_stat  }
     })
    
    return(
     <div className='PokemonStats container-fluid'>
     
        <div id='spriteContainer' className='col-xs-12 col-sm-6'>
          <img src={this.props.info.sprites.front_default} id='sprite'/>
        </div>
        
        <div id='PokeInfo'>
          <div className='col-xs-12 col-sm-offset-2 col-sm-2'>
              <h1>{this.props.info.name.toUpperCase()}</h1>
              <p className='text-left'># {this.props.info.id}</p>
              <p className='text-left'>Types: {this.state.types.join(', ')}</p>
              <p className='text-left'>Height: {this.props.info.height}</p>
              <p className='text-left'>Weight: {this.props.info.weight}</p>
              <p className='text-left'>HP: {this.state.hp}</p>
              <p className='text-left'>Speed: {this.state.speed}</p>
              <p className='text-left'>Attack: {this.state.attack}</p>
              <p className='text-left'>Defense: {this.state.defense}</p>
              <p className='text-left'>Special Attack: {this.state.spAttack}</p>
              <p className='text-justify'>Special Defense: {this.state.spDefense}</p>
          </div>
        </div>
        
        <EvoChain species={this.props.info.species}/>

     </div> 
    )
  }
});

module.exports = PokemonStats;