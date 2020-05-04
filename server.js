var http = require('http');
var url = require('url');
var querystring = require('querystring');
var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
})

var utilisateur = ['Gael', 'Yoverly', 'Karl'];

app.get('/users', function(req, res) {
    res.send('Il y a ' + utilisateur.length + ' utilisateurs connectés');
});

app.get('/users/:user', function(req, res) {
    
    res.render('utilisateur.ejs', {name: req.params.user, utilisateur: utilisateur});
});

app.listen(8080)