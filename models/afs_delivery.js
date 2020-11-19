const mongoose = require('mongoose');

const afs_deliverySchema = new mongoose.Schema({
  sn_delivery: {
    type: String,
    required: true
  },
  no_spb: {
    type: String,
    required: true
  },
  no_do: {
    type: String,
    required: true
  },
  tgl_kirim: {
    type: String,
    required: true
  },
  garansi: {
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

module.exports = mongoose.model('afs_delivery', afs_deliverySchema);