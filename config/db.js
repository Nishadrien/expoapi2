const mongoose=require('mongoose')
const dotenv=require('dotenv');
dotenv.config()
const connect=()=>{
  mongoose
  .connect(process.env.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
}
module.exports=connect
