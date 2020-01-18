const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });
    return mongoose.connection;
}