const getZombiesByLocationId = (id) => {
  let r = [];
  switch (id) {
    case 1:
      return [
        {
          zombieId: '1',
          zombieName: 'Z1',
        },
        {
          zombieId: '2',
          zombieName: 'Z2',
        },
        {
          zombieId: '3',
          zombieName: 'Z3',
        },
        {
          zombieId: '4',
          zombieName: 'Z4',
        },
        {
          zombieId: '5',
          zombieName: 'Z5',
        },
        {
          zombieId: '6',
          zombieName: 'Z6',
        },
      ];
    case 2:
      return [
        {
          zombieId: '21',
          zombieName: 'Z21',
        },
        {
          zombieId: '22',
          zombieName: 'Z22',
        },
        {
          zombieId: '23',
          zombieName: 'Z23',
        },
        {
          zombieId: '24',
          zombieName: 'Z24',
        },
        {
          zombieId: '25',
          zombieName: 'Z25',
        },
        {
          zombieId: '26',
          zombieName: 'Z26',
        },
      ];
    case 3:
      return [
        {
          zombieId: '30',
          zombieName: 'Z30',
        },
      ];
  }
  return r;
};

const getLocations = () => {
  return [
    {
      locationId: 1,
      locationName: 'Hospital',
    },
    {
      locationId: 2,
      locationName: 'School',
    },
    {
      locationId: 3,
      locationName: 'Werehouse',
    },
  ];
};

const getZombieLocations = () => {
  return [
    {
      locationId: 1,
      locationName: 'Hospital',
      zombies: getZombiesByLocationId(1),
    },
    {
      locationId: 2,
      locationName: 'School',
      zombies: getZombiesByLocationId(2),
    },
    {
      locationId: 3,
      locationName: 'Werehouse',
      zombies: getZombiesByLocationId(3),
    },
  ];
};

module.exports = {
  getZombiesByLocationId,
  getZombieLocations,
  getLocations,
};
