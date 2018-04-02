const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
//const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

let api = require('./routes/api');
app.use('/api', api);


let user = require('./routes/users');
app.use('/api/users', user);


app.listen(port, function(){
  console.log(`Server started on port ${port}`);
})