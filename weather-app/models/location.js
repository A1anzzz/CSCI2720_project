var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//location schema
const LocationSchema = Schema({
    name: { type: String, required: true },
    lat: { type: Number, required: true},
    lon: { type: Number, required: true},
    temp_c: { type: Number, required: true},
    weather: { type: String, required: true},
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;