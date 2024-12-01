const mongoose = require('mongoose');

const local = "mongodb+srv://dattien:ydV0TK5q5GGj60t7@cluster0.eseov.mongodb.net/md19304";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
