import mongoose from 'mongoose';

let Volunteer_List;

try {
  // Try to retrieve the existing User model
  Volunteer_List = mongoose.model('Volunteer_List');
} catch {
  // If the model doesn't exist, define it
  const Volunteer_ListSchema = new mongoose.Schema({
    Volunteer_Name: {
      type: String,
      required: true
    },
    Volunteer_Email: {
      type: String,
      required: true,
      unique: true
    },
    Volunteer_Phone: {
      type: String,
      required: true
    },
    Volunteer_Address: {
      type: String,
      required: true
    },
    Volunteer_Skill: {
      type: String,
      required: true
    },
    Volunteer_Experience: {
      type: String,
      required: true
    },
    Volunteer_Role: {
      type: String,
      required: true
    }
  });

  Volunteer_List = mongoose.model('Volunteer_List', Volunteer_ListSchema);
}

export default Volunteer_List;