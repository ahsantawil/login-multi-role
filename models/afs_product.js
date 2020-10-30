const mongoose = require('mongoose');

const afs_productSchema = new mongoose.Schema({
    name_product: {
        type: String,
        required: true
    },
    type_product: {
        type: String,
        required: true
    },
    spec_product: {
        type: String,
        required: true
    },
    desc_product: {
        type: String,
        required: true
     },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }   
})

module.exports = mongoose.model('afs_product', afs_productSchema);