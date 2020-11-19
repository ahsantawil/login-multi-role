const mongoose = require('mongoose');

const afs_analisaSchema = new mongoose.Schema({
  sn_meter: {
    type: String,
    required: true
  },
  identifikasi: {
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('afs_analisa', afs_analisaSchema);