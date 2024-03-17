const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: String,
  role: String , 
  socialMedia : [String], 
  image : Buffer, // Store image data as Buffer (binary)
});

MemberSchema.statics.isValidEmail = async function (email) {
  const member = await this.findOne({ 'socialMedia.3': email }); // Assuming the email is at index 4 of socialMedia
  return !!member;
};


module.exports = mongoose.model('Members', MemberSchema);