const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('dotenv').config();
const PORT = 3000;
app.use(express.static(__dirname + '/public'));

app.get('/ping', (req:any, res:any) => {
  res.json({message: 'pong'});
});

app.get('/test', (req:any, res:any) => {
  res.json({message: 'Hello from test endpoint'});
});

app.get('/api', (req:any, res:any) => {
  res.json({message: 'Hello from server this time'});
});

app.get('/app', (req:any, res:any) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get('/', (req:any, res:any) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});