const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");



const app = express();
app.use(logger("dev"));

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds119585.mlab.com:19585/heroku_l8xft2vc";
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false
});


require("./routes/HTMLroutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});