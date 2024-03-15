import connectDb from "../../middleware/mongoose"
import Volunteer_List from "../../models/Volunteer_List"


const handler = async (req, res)=>{
    if(req.method == 'POST'){
        const {name, email, phone} = req.body
        let u = new Volunteer_List({name, email, phone})
        await u.save()
        res.status(200).json({ success: "success" })
    }
    else{
        res.status(400).json({ error: "This method is not allowed" })
    }
}
export default connectDb(handler);