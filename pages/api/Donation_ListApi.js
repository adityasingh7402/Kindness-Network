import connectDb from "../../middleware/mongoose"
import Donation_List from "../../models/Donation_List"


const handler = async (req, res)=>{
    if(req.method == 'POST'){
        const {Donor_Name, Donor_Email, Donor_Phone, Donor_Address, Donor_PaymentMethod, Donor_Purpose} = req.body
        let u = new Donation_List({Donor_Name, Donor_Email, Donor_Phone, Donor_Address, Donor_PaymentMethod, Donor_Purpose})
        await u.save()
        res.status(200).json({ success: "success" })
    }
    else{
        res.status(400).json({ error: "This method is not allowed" })
    }
}
export default connectDb(handler);