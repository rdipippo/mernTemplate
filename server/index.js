
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/health', (req, res) => {
   res.json({status: 'OK'});
});

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log("server is running on port", server.address().port);
});
