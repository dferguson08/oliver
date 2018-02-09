
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('vehicles').insert([
        {vin: 'JM3KFADL2H0148770', make: 'Ford', model: 'F-150', year: '2017'},
        {vin: 'JM3KFADL2H0148771', make: 'Ford', model: 'Edge', year: '2014'},
        {vin: 'JM3KFADL2H0148772', make: 'Jeep', model: 'Grand Cherokee', year: '2008'},
        {vin: 'JM3KFADL2H0148773', make: 'Mini Cooper', model: 'Countryman', year: '2016'},
        {vin: 'JM3KFADL2H0148774', make: 'Alfa Romeo', model: 'Guilia', year: '2018'},
        {vin: 'JM3KFADL2H0148775', make: 'Kia', model: 'Stinger', year: '2018'},
      ]);
    });
};
