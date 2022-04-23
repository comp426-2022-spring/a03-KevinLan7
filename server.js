import minimist from "minimist";
import express from "express";
import {coinFlip,coinFlips,countFlips,flipACoin} from "./coin.mjs";

// Require Express.js
const express = require('express');
const app = express();

let args = minimist(process.argv.slice(2));
let port = 'port';
let HTTP_PORT = min[port] || 5000;

// Start an app server
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT));
});

app.get('/app/', (req, res) => {
    // Respond with status 200
    res.statusCode = 200;
    // Respond with status message "OK"
    res.statusMessage = 'OK';
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end(res.statusCode+ ' ' +res.statusMessage);
});

app.get('/app/flip',(req,res)=>{
    let flip = coinFlip();
    res.status(200).json({'flip':flip});
});

app.get('/app/flips/:number', (req, res) => {
    let result = coinFlips(req.params.number);
    let count = coinFlips(result);
    res.status(200).json({'raw':result,'summary':count});
});

app.get('/app/flip/call/heads',(req,res)=>{
    res.status(200).json(flipACoin("heads"));
});


app.get('/app/flip/call/tails',(req,res)=>{
    res.status(200).json(flipACoin("tails"));
});

// Default response for any other request
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND');
    res.type("text/plain");
});
