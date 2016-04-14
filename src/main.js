var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var createBrowserHistory = require('history/lib/createBrowserHistory');
var history = createBrowserHistory();

var Routes = require('./Routes.js');


ReactDom.render(<Router history={history} routes={Routes}/>,document.getElementById('main'));
