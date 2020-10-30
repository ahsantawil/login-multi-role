const mongoose = require('mongoose');

const afs_consumerSchema = new mongoose.Schema({
  uiw: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default:Date.now
  },
  updatedAt: {
    type: Date,
    default:Date.now
  }
})

module.exports = mongoose.model('afs_consumer', afs_consumerSchema);