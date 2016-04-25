var React = require('react');


var MovesList = React.createClass({
  
  
  getInitialState:function(){
      return{
          sprites:null
      }
  },
  
    componentDidMount:function(){
      
  },
    
  componentWillReceiveProps: function(nextProps) {
      
  }, 
  
  
  render:function(){
    return(
      
      <div className='container-fluid Card'>

        <h3 className='text-center'>Moves List</h3>
        <ul className='cleanList'>
          { this.props.moves ?
                  this.props.moves.map( (listValue,i) => {
                      return <li className='col-xs-12 col-sm-3' key={i}> <b>{listValue.move.name}</b> </li>
                  }) :
                null  
              }
        </ul>
     
      </div>
  )}

});


module.exports = MovesList;