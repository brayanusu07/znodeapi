const express = require('express');
const app = express();
const {
  getLocations,
  getZombiesByLocationId,
  getZombieLocations,
} = require('./source');

const port = process.env.PORT || 80;

app.get('/locations', (req, res) => {
  res.json(getLocations());
});

app.get('/zombie/locations', (req, res) => {
  res.json(getZombieLocations());
});

app.get('/zombie/location/:id', (req, res) => {
  res.json(getZombiesByLocationId(1));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
