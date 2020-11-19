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
  uiw: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  document: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('afs_doc', afs_docSchema);