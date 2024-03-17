const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'admin' 
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }

});

module.exports = mongoose.model('AdminSchema', AdminSchema);

