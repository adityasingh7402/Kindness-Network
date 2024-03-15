import mongoose from 'mongoose';

let NGO_List;

try {
  // Try to retrieve the existing User model
  NGO_List = mongoose.model('NGO_List');
} catch {
  // If the model doesn't exist, define it
  const NGO_ListSchema = new mongoose.Schema({
    NGO_Organisation: {
      type: String,
      required: true
    },
    NGO_Type: {
      type: String,
      required: true
    },
    NGO_Mission: {
      type: String,
      required: true
    },
    NGO_ActivitesDone: {
      type: String,
      required: true
    },
    NGO_Email: {
      type: String,
      required: true
    },
    NGO_Contact: {
      type: String,
      required: true
    },
    NGO_Address: {
      type: String,
      required: true
    },
    NGO_Website: {
      type: String,
      required: true
    },
    NGO_SocialMedia: {
      type: String,
      required: true
    },
  });

  NGO_List = mongoose.model('NGO_List', NGO_ListSchema);
}

export default NGO_List;