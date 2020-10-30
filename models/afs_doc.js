const mongoose = require('mongoose');

const afs_docSchema = new mongoose.Schema({
  no_surat: {
    type: String,
    required: true
  },
  name_doc: {
    type: String,
    required: true
  },
  document: {
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
  createdAt: {
    type: Date,
    default:Date.now
  },
  updatedAt: {
    type: Date,
    default:Date.now
  }
});

module.exports = mongoose.model('afs_doc', afs_docSchema);