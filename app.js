const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    return res.json({message: "Hello World"})
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

app.listen(process.env.PORT || 2000, () => {
    console.log("Server is running...")
})

