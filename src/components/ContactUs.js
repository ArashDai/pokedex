var React = require('react');



var ContactUs = React.createClass({
  getInitialState:function(){
    return{};
  },

  saveInfo:function(e){
    var info = {
      customer: e.target.form[0].value,
      email: e.target.form[1].value,
      phone: e.target.form[2].value,
      inquiry: e.target.form[3].value
    };

    this.setState(info);
  },

  checkCompletion:function(){
    if(this.state.customer !== undefined ||
       this.state.email !== undefined ||
       this.state.inquiry !== undefined){
       this.sendInfo();
    } else {
      alert('please complete the form');
    }
  },
  sendInfo:function(){

    var userInformation = JSON.stringify(this.state);

    var xhttp = new XMLHttpRequest();

    if (!xhttp) {
      alert( 'Cannot create an XMLHTTP instance');
      return false;
    }
    
    xhttp.open('POST','/inquiryHandler',false);
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send(userInformation);
    
    if(xhttp.responseText === 'FAILURE'){
      alert( 'Were sorry, there was an issue sending your inquiry\n Please try again');
    }

    if(xhttp.responseText === 'EMAILFAILURE'){
      alert( 'Were sorry, we had an issue sending your inquiry\n Please check your email address and try again');
    }

    if(xhttp.responseText === 'SUCCESS'){
        alert('your Inquiry has been succesfully sent')
    }

  },

	render:function(){
		return(
			<div className='container-fluid Contact'>
        <a name='contactDom'></a>
        <h1 className='text-center'>Contact</h1>

        <form className='col-xs-12'>

          <div className='col-xs-12 col-sm-8 col-sm-offset-2' id='formbox'>
            <input type='text' name='fullname' placeholder='Full Name' onInput={this.saveInfo} className='col-xs-4'/>
            <input type='text' name='email' placeholder='Email' onInput={this.saveInfo} className='col-xs-4'id='emailInput'/>
            <input type='text' name='phone' placeholder='Phone Number' onInput={this.saveInfo} className='col-xs-4'/>
          </div>

          <textarea className='col-xs-12 col-sm-8 col-sm-offset-2' placeholder='I love this website...' onInput={this.saveInfo}>
          </textarea>

          

          <div className='col-xs-12'>
            <button id='contactsubmit' type='button' className='center-block btn btn-danger' onClick={this.checkCompletion}>Submit</button>
          
    


          </div>

        </form>

			</div>
		)}
});

module.exports = ContactUs;