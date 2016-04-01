var express = require('express');
var bodyParser= require('body-parser')
var path = require('path');
var app = express();
var secret = require('./secrets');
var nodemailer = require('nodemailer');

app.use(express.static('client'));

app.use(bodyParser.json());


app.get('*', function (request, response){
  response.sendFile(path.resolve('client', 'index.html'))
});

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: secret.email,
        pass: secret.pass
    }
});

app.post('/inquiryHandler',function (request,response){

  var textCreator = function(data){
  var orderText =   'Customer Information: '+data.body.customer+'\n'+
                    'Phone Number: ' +data.body.phone+'\n'+
                    'Email: '+data.body.email+'\n'+  
                    'Inquiry: ' + data.body.inquiry

    return orderText;
  }

  var finalText = textCreator(request);

  var customerMail = {
    from: 'theKettle',
    to: request.body.email,
    subject: ' TheKettle ',
    text: 'Hello  '+request.body.customer+'\n'+'Thanks for placing your interest, we\'ll contact you soon. Have a great day!' 
  };

  var buisnessMail = {
    from: 'TheKettle Web Developers',
    to: secret.email, 
    subject: 'KettleInquiry: '+Date.now(),
    text: finalText
  };

  transporter.sendMail(buisnessMail, function(error, info){
    if(error){
        response.send('FAILURE')
    }
    console.log('Buisness Message sent: ' + info.response);

    transporter.sendMail(customerMail, function(error, info){
      if(error){
           response.send('EMAILFAILURE');
      }
      console.log('Customer Message Sent: ' + info.response);
      response.send('SUCCESS')
    });
  });
});



var PORT = process.env.PORT || 3000;

app.listen(PORT);
