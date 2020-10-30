const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const afs_areaSchema = new mongoose.Schema({
  area: {
    type: String,
    required: true
  },
  uiwId: {
    _id: {
      type: ObjectId,
      ref: 'afs_consumer',
      required: true
    },
    uiw: {
      type: String,
      required: true
    }
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

module.exports = mongoose.model('afs_area', afs_areaSchema);