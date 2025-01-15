const express = require("express")
const axios = require("axios")
const app = express()

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

app.post("/",async(req,res)=>{
//5511949343050
    const phones = [
        {phone:"5511949343050",message:"A"},
        {phone:"5511949343050",message:"M"},
        {phone:"5511949343050",message:"O"},
        {phone:"5511949343050",message:"R"},
        {phone:"5511949343050",message:"A"},
        {phone:"5511949343050",message:"C"},
        {phone:"5511949343050",message:"O"},
        {phone:"5511949343050",message:"R"},
        {phone:"5511949343050",message:"D"},
        {phone:"5511949343050",message:"A"},
    ]

    const requests = []
    for (let i = 0; i < phones.length; i++) {
        await sleep(1000)
        const request = await axios.post(`https://evolution.bdanalytics.com.br/message/sendText/renanjoia`,{"number":`${phones[i].phone}@s.whatsapp.net`,
	"text":`${phones[i].message}}`},{headers: {apiKey:"D8ADB0E69808-45C4-BA16-81768364F729"}})
        
        requests.push(request.data)
    }

    return res.json({message: "Hello World"})
})

app.get("/",(req,res)=>{
    return res.json({name:"Hello World"})
})

const port = 3002

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`)
})

