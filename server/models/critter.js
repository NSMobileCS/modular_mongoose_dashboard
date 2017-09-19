var mongoose = require("mongoose");

var CritterSchema = new mongoose.Schema({
    species: {type: String, required: true},
    name: {type: String},
    notes: {type: String},
    },
    {timestamps: true});

mongoose.model('Critter', CritterSchema);
    