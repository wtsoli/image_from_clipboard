// const scrape = require('website-scraper');
// const options = {
//   urls: ['http://www.att.com/'],
//   directory: `${__dirname}/target_sites/www.att.com`,
// };
 
// // with async/await
// const result = scrape(options);
 
// // with promise
// scrape(options).then((result) => {});
 
// or with callback
// scrape(options, (error, result) => {});



var express = require('express');
//var server = express.createServer();
// express.createServer()  is deprecated. 
var server = express(); // better instead
server.use('/media', express.static(__dirname + '/media'));
// server.use(express.static(__dirname + '/target_sites/www.att.com'));
server.use(express.static(__dirname + '/public'));

server.listen(3000);