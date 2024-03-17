const pg = require('pg');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.get('/api/health', async (req, res) => {

const client = new pg.Client();
let dbStatus = "Could not contact db";
await client.connect()
   try {
      const res = await client.query('SELECT * from test')
      dbStatus = res.rows[0].value;
      console.log(res.rows[0].value) // Hello world!
   } catch (err) {
      console.error(err);
   } finally {
      await client.end()
   }

res.json({status: 'OK', dbStatus: dbStatus});
});

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log("server is running on port", server.address().port);
});
