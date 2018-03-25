const express = require('express')
const port = 8080
const exphbs  = require('express-handlebars');
var swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./api.json');
var app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/about',(req, res)=>{
  const content = 'This is about me'
  res.render('about', {
    content: content
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.static('public'))
