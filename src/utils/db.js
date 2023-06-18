
import mongoose from "mongoose"
const url = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.koa7uom.mongodb.net/?retryWrites=true&w=majority`;

const connect= async()=>{
    try{
        mongoose.connect(url)
        console.log("connection done.");
    }
    catch(err){
        throw new Error("Connection failed")
    }
}
export default connect 