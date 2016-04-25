var React = require('react');
var EvoChain = require('./EvoChain');
var MovesList = require('./MovesList');


var PokemonStats = React.createClass({
 
 getInitialState:function(){
   return{
      types:[],
      hp:null,
      speed:null,
      attack:null,
      defense:null,
      spAttack:null,
      spDefense:null,
      species:null
   }
 },
 
 componentWillReceiveProps: function(nextProps){
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

    this.state.species = this.props.info.species;
      
    this.state.moves = this.props.info.moves;
    
    return(
     <div className='PokemonStats container-fluid'>
        <h1 className='text-center'>{this.props.info.name.toUpperCase()}</h1>
     
        <div id='spriteContainer' className='col-xs-12 col-sm-6'>
          <img src={this.props.info.sprites.front_default} id='sprite'/>
        </div>
        
          <div className='col-xs-12 col-sm-offset-1 col-sm-4 pokeStats'>
              <p className='text-left'>Pokemon # <span>{this.props.info.id}</span></p>
              <p className='text-left'>Types: <span>{this.state.types.join(', ')}</span></p>
              <p className='text-left'>Height: <span>{this.props.info.height}</span></p>
              <p className='text-left'>Weight: <span>{this.props.info.weight}</span></p>
              <p className='text-left'>HP: <span>{this.state.hp}</span></p>
              <p className='text-left'>Speed: <span>{this.state.speed}</span></p>
              <p className='text-left'>Attack: <span>{this.state.attack}</span></p>
              <p className='text-left'>Defense: <span>{this.state.defense}</span></p>
              <p className='text-left'>Special Attack: <span>{this.state.spAttack}</span></p>
              <p className='text-left'>Special Defense: <span>{this.state.spDefense}</span></p>
          </div>

        
        <EvoChain species={this.state.species}/>
        <MovesList moves={this.state.moves} />

     </div> 
    )
  }
});

module.exports = PokemonStats;