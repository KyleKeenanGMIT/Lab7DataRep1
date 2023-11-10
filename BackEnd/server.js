const express = require('express')//express import.
const app = express()
const port = 4000 //port set to 4000


const cors = require('cors');//cors
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});
//allows the HTTP request - error was shown in console on chrome.


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());//body parser installed using the cmd line npm install body-parser.

app.post('/api/book',(req,res) =>{
console.log(req.body);
res.send('data received');//response
})

app.get('/', (req, res) => {//Server sits and listens for request - / call back function.
  res.send('Hello World!')//hello world response.
})

app.get('/api/books',(req, res) =>{
    const books = [//books array with json data
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ];
       
            


                res.json({
                    myBooks:books,
                    "Message": "Some info",//response with the books data from the above array.
                    "Status" : "Happy"
                })
                
        
    })

 //server listens for a http request using a get method.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) //node server.js in terminal will give this response.
})//code gathered from expressjs.com or from lab 5