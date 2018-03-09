/**
 * @file
 * (ENTER FILE DESCRIPTION HERE)
 *
 * @author David Ferguson <davidferguson@dialexa.com>
 * @copyright Dialexa 2018
 * (02/19/2018)
 */

'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./knexfile');
const knex = require('knex')(config[process.env.NODE_ENV]);
const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/inventory', async (req, res) => {
  try {
    const vehicles = await knex.select().from('vehicles');
    res.send({
      vehicles
    });
  } catch (error) {
    res.status(500).send({});
  }
});

// update app.get to app.get/vehicles
// will be able to hit endpoint using postman to get list of vehicles using knex to read from DB.

app.listen(3000, () => console.log('Example app listening on port 3000!'));
