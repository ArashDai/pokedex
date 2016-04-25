var React = require('react');
var $ = require('jquery');

var EvoChain = React.createClass({


  getInitialState:function(){
      return{
          sprites:null
      }
  },    
  
  
  evoSort:function(Arr){
        Arr.sort(function(a,b){
		   return (Number(a.replace(/([\D])/ig,'')) - Number(b.replace(/([\D])/ig,'')))
	    })
        this.setState({sprites:Arr})
  },
  
  
  evoGrab:function(url){
      const pokeapi = "http://pokeapi.co/api/v2/pokemon/";
      let evolutions = [];
      let sprites = [];
      
      $.get(url,
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
                         sprites.push(response.sprites.front_default);
                         this.evoSort(sprites)
                    })
                }
            })
      )
  },
  
  
    
  componentDidMount:function(){
      this.evoGrab(this.props.species.url)
  },
    
  componentWillReceiveProps: function(nextProps) {
      this.evoGrab(nextProps.species.url)
  },  
    
  render:function(){
      
    return(
      <div className='container-fluid Card'>
        <h3 className='text-center'>Evolution Chain</h3>
        <ul className='cleanList' >
            { this.state.sprites ?
                this.state.sprites.map( (listValue,i) => {
                    return <li key={i}><img src={listValue}/> </li>
                }) :
              null  
            }
        </ul>
      </div>
    )}

});


module.exports = EvoChain;