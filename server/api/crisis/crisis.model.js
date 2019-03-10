'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var CrisisSchema = new Schema({
      hora: Date,
      duracion: Number,
      sintomas: String,
      saturacion: Number,
      medicacion: Boolean,
      oxigeno: Boolean
    });

module.exports = mongoose.model('Crisis', CrisisSchema);
