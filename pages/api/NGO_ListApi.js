import connectDb from "../../middleware/mongoose"
import NGO_List from "../../models/NGO_List"


const handler = async (req, res)=>{
    if(req.method == 'POST'){
        const {name, email, phone} = req.body
        let u = new NGO_List({name, email, phone})
        await u.save()
        res.status(200).json({ success: "success" })
    }
    else{
        res.status(400).json({ error: "This method is not allowed" })
    }
}
export default connectDb(handler);