var React = require('react');
var $ = require('jquery');

var EvoChain = React.createClass({
    
  componentDidMount:function(){
      const pokeapi = "http://pokeapi.co/api/v2/pokemon/";
      let evolutions = [];
      let sprites = [];
      
      $.get(this.props.species.url,
        response => $.get(response.evolution_chain.url,
            response => {
                for(let i = 0; i<response.chain.evolves_to.length; i++){
                    if(response.chain.evolves_to[i].species.name){ 
                        evolutions.push(response.chain.evolves_to[i].species.name)
                    }
                    if(response.chain.evolves_to[i].evolves_to[0].species.name){
                        for( let j = 0; j<response.chain.evolves_to[i].evolves_to.length; j++){
                            evolutions.push(response.chain.evolves_to[i].evolves_to[j].species.name)
                        }  
                    }
                }
                for(let x = 0; x<evolutions.length; x++){
                    $.get(pokeapi + evolutions[x],
                    response => {
                         sprites.push(response.sprites.front_default)
                         console.log(sprites,'current sprites #1')
                         this.setState({sprites})
                    })
                    console.log(sprites,'current sprites #2')
                }
            })
           
      )
  },
    
    
  render:function(){
      
    return(
      <div className='container-fluid Card'>

        <h3 className='text-center'>Evolution Chain</h3>

        <div></div> 
        <div></div>
        <div></div>
        
      </div>
  )}

});


module.exports = EvoChain;