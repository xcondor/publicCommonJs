var request = require('request');
var cheerio = require('cheerio');
console.log(request)
request('http://www.xcondor.cn/nav.html', function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
});
$ = cheerio.load('<h2 class="title">Hello World</h2>')
console.log()
