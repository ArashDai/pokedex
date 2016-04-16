var React = require('react');
var EvoChain = require('./EvoChain')

var PokemonStats = React.createClass({
 
  render:function(){
    let stats = {
      types:[],
      hp:null,
      speed:null,
      attack:null,
      defense:null,
      spAttack:null,
      spDefense:null
    } 
    this.props.info.types.forEach(x => { stats.types.push(x.type.name) })
    stats.types = stats.types.join(', ')
    
    this.props.info.stats.forEach(x => { 
      if(x.stat.name==='hp'){ stats.hp = x.base_stat  }
      if(x.stat.name==='speed'){ stats.speed = x.base_stat  }
      if(x.stat.name==='attack'){ stats.attack = x.base_stat  }
      if(x.stat.name==='defense'){ stats.defense = x.base_stat  }
      if(x.stat.name==='special-attack'){ stats.spAttack = x.base_stat  }
      if(x.stat.name==='special-defense'){ stats.spDefense = x.base_stat  }
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
              <p className='text-left'>Types: {stats.types}</p>
              <p className='text-left'>Height: {this.props.info.height}</p>
              <p className='text-left'>Weight: {this.props.info.weight}</p>
              <p className='text-left'>HP: {stats.hp}</p>
              <p className='text-left'>Speed: {stats.speed}</p>
              <p className='text-left'>Attack: {stats.attack}</p>
              <p className='text-left'>Defense: {stats.defense}</p>
              <p className='text-left'>Special Attack: {stats.spAttack}</p>
              <p className='text-justify'>Special Defense: {stats.spDefense}</p>
          </div>
        </div>
        
        <EvoChain species={this.props.info.species}/>

     </div> 
    )
  }
});

module.exports = PokemonStats;