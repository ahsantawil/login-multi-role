const mongooose = require('mongoose');

const afs_fisSchema = new mongooose.Schema({
  sn: {
    type: String,
    required: true
  },
  tgl_assembly: {
    type: String,
    required: true
  },
  tgl_calibrasi: {
    type: String,
    required: true
  },
  tgl_gi: {
    type: String,
    required: true
  },
  tgl_packing: {
    type: String,
    required: true
  },
  no_box: {
    type: String,
    required: true
  },
  no_spb: {
    type: String,
    required: true
  },
  tgl_kirim: {
    type: String,
    required: true
  },
  consumer: {
    type: String,
    required: true
  },
  type: {
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

module.exports = mongooose.model('afs_fis', afs_fisSchema);