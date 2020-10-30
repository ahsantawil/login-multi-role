const mongoose = require('mongoose');

const afs_penggantiSchema = new mongoose.Schema({
  sn_pengganti: {
    type: String,
    required: true
  },
  sn_klaim: {
    type: String,
    required: true
  },
  no_klaim: {
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
  tgl_kirim: {
    type: String,
    required: true
  },
  garansi: {
    type: String,
    required: true
  },
  no_do: {
    type: String,
    required: true
  },
  type_product: {
    type: String,
    required: true
  },
  qty: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('afs_pengganti', afs_penggantiSchema);