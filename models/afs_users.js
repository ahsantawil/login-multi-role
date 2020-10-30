const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const afs_usersSchema = new mongoose.Schema({
    fullname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    level: {
      type: String,
      required: true
    },
    createdAt: {
      allowNull: false,
      type: Date,
      default: Date.now
    },
    updatedAt: {
      allowNull: false,
      type: Date,
      default: Date.now
    }
});

afs_usersSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
})

module.exports = mongoose.model('afs_users', afs_usersSchema);