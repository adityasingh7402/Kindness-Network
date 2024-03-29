import mongoose from 'mongoose';

let Donation_List;

try {
  Donation_List = mongoose.model('Donation_List');
} catch {
  const Donation_ListSchema = new mongoose.Schema({
    Donor_Name: {
      type: String,
      required: true
    },
    Donor_Email: {
      type: String,
      required: true
    },
    Donor_Phone: {
      type: String,
      required: true
    },
    Donor_Address: {
      type: String
    },
    Donor_PaymentMethod: {
      type: String,
      required: true
    },
    Donor_Purpose: {
      type: String,
      required: true
    },
  });

  Donation_List = mongoose.model('Donation_List', Donation_ListSchema);
}

export default Donation_List;