const mongoose = require('mongoose');

const afs_consumerSchema = new mongoose.Schema({
  uiw: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('afs_consumer', afs_consumerSchema);