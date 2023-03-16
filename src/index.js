const express = require('express');
const route = require('./routes')
const app = express();
const {initData}= require('./config/database')

require('./config/handlebars')(app)

app.use('/static',express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(route)

initData()
.then(()=>{
    app.listen(5000, ()=>console.log('Server start on port 5000.........'));

})
.catch((err) => console.log("canot start", err))