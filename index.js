const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {
  getLocations,
  getZombies,
  getZombiesLocation,
  updateZombieLocation,
} = require('./source');

const port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/locations', getLocations);

app.get('/zombies', getZombies);

app.get('/zombies/location', getZombiesLocation);

app.patch('/zombie/:zombieId/location', updateZombieLocation);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
