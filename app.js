const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    return res.json({message: "Hello World"})
})

app.listen(process.env.PORT || 2000, () => {
    console.log("Server is running...")
})

