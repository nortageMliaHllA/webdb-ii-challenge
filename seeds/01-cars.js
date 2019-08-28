
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { make: 'Audi', model: 'R8', color: 'Matte Blue', vin: '1JF379CPQ40GCZ611' },
        { make: 'Ferrari', model: 'F12', color: 'Red', vin: '2PW3KR5OF8X8I3649' },
        { make: 'Porsche', model: '911', color: 'Black', vin: '3LA13KS98130GF2D2' },
        { make: 'Lexus', model: 'RC', color: 'Matte White', vin: '4LER979PLBY22YS26' },
        { make: 'Dodge', model: 'Challenger', color: 'Burgundy', vin: '5AZPK6TH4211WLHJ5' },
        { make: 'Ford', model: 'Mustang', color: 'Silver', vin: '6ZXCV65FV1X6BN113' },
        { make: 'Chevy', model: 'Camaro', color: 'Orange', vin: '7POI3213QWE78TW87' },
                
      ]);
    });
};
