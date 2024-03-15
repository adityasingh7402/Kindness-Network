import connectDb from "../../middleware/mongoose"
import NGO_List from "../../models/NGO_List"


const handler = async (req, res)=>{
    if(req.method == 'POST'){
        const {NGO_Organisation, NGO_Type, NGO_Mission, NGO_ActivitesDone, NGO_Email, NGO_Contact, NGO_Address, NGO_Website, NGO_SocialMedia} = req.body
        let u = new NGO_List({NGO_Organisation, NGO_Type, NGO_Mission, NGO_ActivitesDone, NGO_Email, NGO_Contact, NGO_Address, NGO_Website, NGO_SocialMedia})
        await u.save()
        res.status(200).json({ success: "success" })
    }
    else{
        res.status(400).json({ error: "This method is not allowed" })
    }
}
export default connectDb(handler);