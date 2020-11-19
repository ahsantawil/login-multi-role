const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const afs_areaSchema = new mongoose.Schema({
  area: {
    type: String,
    required: true
  },
  uiw: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('afs_area', afs_areaSchema);