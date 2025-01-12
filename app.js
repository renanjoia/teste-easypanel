const express = require("express")
const axios = require("axios")
const app = express()

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

app.post("/",async(req,res)=>{
//5511949343050
    const phones = [
        {phone:"5511940641960",message:"Olá Renan"},
        {phone:"5511940641960",message:"Vi que está com alguns desafios para executar a tarefa de vínculo do tiny"},
        {phone:"5511940641960",message:"Sou responsável pelo time de suporte e gostaria de te ajudar"},
    ]

    const requests = []
    for (let i = 0; i < phones.length; i++) {
        await sleep(3000)
        const request = await axios.post(`https://evolution.bdanalytics.com.br/message/sendText/renanjoia`,{"number":`${phones[i].phone}@s.whatsapp.net`,
	"text":`${phones[i].message}}`},{headers: {apiKey:"D8ADB0E69808-45C4-BA16-81768364F729"}})
        
        requests.push(request.data)
    }

    return res.json({message: "Hello World"})
})

app.get("/",(req,res)=>{
    return res.json({name:"Hello World"})
})

// Lidar com SIGTERM
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
    });
});

// Lidar com SIGINT
process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
    });
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running...")
})

