/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Crisis = require('../api/crisis/crisis.model');
var User = require('../api/user/user.model');

Crisis.find({}).removeAsync()
  .then(function() {
    Crisis.create({
      hora: new Date(),
      duracion: 3,
      sintomas: 'se puso tiesa y empezo la mano a tirirtar y los ojitos, se ahogaba y perdio la consciencia',
      saturacion: 98,
      medicacion: false,
      oxigeno: true
    });
});

User.find({}).removeAsync()
  .then(function() {
    User.createAsync({
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(function() {
      console.log('finished populating users');
    });
  });
