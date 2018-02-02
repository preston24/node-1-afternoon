const express = require('express');
const bodyParser = require('body-parser');
const mc = require( __dirname + '/controllers/messages_controller');


const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );


app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);



app.listen(port, () => {
  console.log('Listening on port', port);
});