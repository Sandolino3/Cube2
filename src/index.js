const express = require('express');
const handlebars = require('express-handlebars')
const route = require('./routes')
const app = express();

app.use('/static',express.static('public'));

app.engine('hbs', handlebars.engine({
    extname:'hbs'
}))
app.set('view engine','hbs')
app.set('views','./src/views')
app.set('index',)

app.use(route)




app.listen(5000, ()=>console.log('Server start on port 5000.........'));
