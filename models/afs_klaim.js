const mongoose = require('mongoose');

const afs_klaimSchema = new mongoose.Schema({
  sn_klaim: {
    type: String,
    required: true
  },
  uiw: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  no_klaim: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  no_surat: {
    type: String,
    required: true
  },
  produksi: {
    type: String,
    required: true
  },
  type_meter: {
    type: String,
    required: true
  },
  qty: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('afs_klaim', afs_klaimSchema);