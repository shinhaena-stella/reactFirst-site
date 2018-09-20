const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const path = require('path');
app.use(express.static(path.join(__dirname, './index.html')));

app.get('/', (req, res) => {
    console.log('hi');
    res.send('hi world');
  });

app.listen(3000, () => {
    console.log('Port is listening at 3000');
});

