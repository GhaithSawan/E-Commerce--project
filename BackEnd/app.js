let express = require("express")
let app = express()
let cors = require("cors")
require("dotenv").config()

const connectToDB = require("./connectToDB")
connectToDB()




app.use(express.json())
app.use(cors())

app.use("/UserAuth", require("./routs/UserRouts/UserAuthRout.js"))
app.use("/UserMethod", require("./routs/UserRouts/UserMethod.js"))
app.use("/ProductRouts", require("./routs/ProductRout.js"))




app.listen(3000 || process.env.Port,()=>{
    console.log("Iam Listen");
})