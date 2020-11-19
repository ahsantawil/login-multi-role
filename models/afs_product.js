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
     }
}, {
    timestamps: true
})

module.exports = mongoose.model('afs_product', afs_productSchema);