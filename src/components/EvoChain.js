var React = require('react');
var $ = require('jquery');

var EvoChain = React.createClass({
    //find a way to ensure evoChain is in correct order
    //use a regexp to grab the numbers at the end and loop to reorder
  getInitialState:function(){
      return{
          sprites:null
      }
  },    
    
  componentDidMount:function(){
      const pokeapi = "http://pokeapi.co/api/v2/pokemon/";
      let evolutions = [];
      let sprites = [];
      
      $.get(this.props.species.url,
        response => $.get(response.evolution_chain.url,
            response => {
                evolutions.push(response.chain.species.name);
                for(let i = 0; i<response.chain.evolves_to.length; i++){
                    if(response.chain.evolves_to[i].species.name){ 
                        evolutions.push(response.chain.evolves_to[i].species.name)
                    }
                    if(response.chain.evolves_to[i].evolves_to[0]){
                        for( let j = 0; j<response.chain.evolves_to[i].evolves_to.length; j++){
                            evolutions.push(response.chain.evolves_to[i].evolves_to[j].species.name)
                        }  
                    }
                }
                for(let x = 0; x<evolutions.length; x++){
                    $.get(pokeapi + evolutions[x],
                    response => {
                         //sprites.push(response.sprites.front_default)
                         sprites.push(<img src={response.sprites.front_default} /> )
                         console.log(sprites,'current sprites #1')
                         this.setState({sprites})
                    })
                }
            })
           
      )
  },
    
  componentWillReceiveProps: function(nextProps) {
      const pokeapi = "http://pokeapi.co/api/v2/pokemon/";
      let evolutions = [];
      let sprites = [];
      
      $.get(nextProps.species.url,
        response => $.get(response.evolution_chain.url,
            response => {
                evolutions.push(response.chain.species.name);
                console.log('meseeks');
                for(let i = 0; i<response.chain.evolves_to.length; i++){
                    
                    if(response.chain.evolves_to[i].species.name){ 
                        evolutions.push(response.chain.evolves_to[i].species.name)
                    }
                    
                    if(response.chain.evolves_to[i].evolves_to[0]){
                        for( let j = 0; j<response.chain.evolves_to[i].evolves_to.length; j++){
                            evolutions.push(response.chain.evolves_to[i].evolves_to[j].species.name)
                        }  
                    }
                }
                for(let x = 0; x<evolutions.length; x++){
                    $.get(pokeapi + evolutions[x],
                    response => {
                         //sprites.push(response.sprites.front_default)
                         sprites.push(<img src={response.sprites.front_default} /> )
                         console.log(sprites,'current sprites #1')
                         this.setState({sprites})
                    })
                }
            })
           
      )
  },  
    
  render:function(){
      
    return(
      <div className='container-fluid Card'>

        <h3 className='text-center'>Evolution Chain</h3>

        <ul className='evoChain' >
            { this.state.sprites ?
                this.state.sprites.map(listValue => {
                    return <li>{listValue}</li>
                }) :
              null  
            }
        </ul>
        
      </div>
  )}

});


module.exports = EvoChain;