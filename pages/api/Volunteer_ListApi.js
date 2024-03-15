import connectDb from "../../middleware/mongoose"
import Volunteer_List from "../../models/Volunteer_List"


const handler = async (req, res)=>{
    if(req.method == 'POST'){
        const {Volunteer_Name ,Volunteer_Email, Volunteer_Phone, Volunteer_Address, Volunteer_Skill, Volunteer_Experience, Volunteer_Role} = req.body
        let u = new Volunteer_List({Volunteer_Name ,Volunteer_Email, Volunteer_Phone, Volunteer_Address, Volunteer_Skill, Volunteer_Experience, Volunteer_Role})
        await u.save()
        res.status(200).json({ success: "success" })
    }
    else{
        res.status(400).json({ error: "This method is not allowed" })
    }
}
export default connectDb(handler);