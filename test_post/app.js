const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const basicAuth = require('basic-auth');

app.use(bodyParser.json());

const auth = (req, res, next) => {
  const user = basicAuth(req);
  if (!user || user.name !== 'echoedinvoker' || user.pass !== 'repatelcc1') {
    res.set('WWW-Authenticate', 'Basic realm="401"');
    return res.status(401).send();
  }
  next();
};

app.post('/test', (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Data received' });
});

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'GET request received' });
});

app.listen(3300, () => {
  console.log('Server is running on port 3300');
});

