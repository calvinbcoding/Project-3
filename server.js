const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const session = require('express-session');
const cors = require('cors');
const MongoDBStore = require('connect-mongodb-session')(session);
require ('./db/db');

const store = new MongoDBStore({
	uri: 'mongodb://localhost:27017/BPI',
	collection: 'PAST MONTH'
});
app.use(cors({
    origin: "http://localhost:3000",
    credentials: 'include',
    optionsSuccessStatus: 200
}))
app.use(session({
	saveUninitialized: true,
	secret: 'walletCB',
	resave: true,
	store: store,
	cookie: {maxAge: 100000000000 * 10000000000000 * 1000000000
	},
}))

//Middleware
app.use(bodyParser.json());
app.use(morgan('short'));
app.use((req, res, next)=>{
	console.log(`request from  ${req.session.walletId}`)
	next();
})




//controller connection
const cryptoController = require('../back/controllers/cryptoController');
app.use('https://api.coindesk.com/v1/bpi/currentprice.json', cryptoController);

//server port:
let port = process.env.PORT;
if (process.env.PORT == null || process.env.PORT == "" || process.env.PORT == undefined)
{
	port = 9000;
}

app.listen(port, function()
{
	console.log(`Server listening on port ${port}`);
});
