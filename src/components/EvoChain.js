var React = require('react');
var $ = require('jquery');

var EvoChain = React.createClass({
    
  createChain:function(){
      var evoSprites = [];
      
      $.get(this.props.species.url,
        response => $.get(response.evolution_chain.url,
            response => {
                if(response.chain.evolves_to[0].species.name){ 
                evoSprites.push(response.chain.evolves_to[0].species.name)
                }
                
                if(response.chain.evolves_to[0].evolves_to[0].species.name){
                    evoSprites.push(response.chain.evolves_to[0].evolves_to[0].species.name)
                }
                
            console.log(evoSprites)  
            } 
         )
        
       
        )
      
      
  },
    
    
  render:function(){
      
    return(
      <div className='container-fluid Card'>

        <h3 className='text-center'>Evolution Chain</h3>

        <div Onload={this.createChain()}></div> 
        <div></div>
        <div></div>
        
      </div>
  )}

});


module.exports = EvoChain;