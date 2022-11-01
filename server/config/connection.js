const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/St-Louis-Falcons');

module.exports = mongoose.connection;
