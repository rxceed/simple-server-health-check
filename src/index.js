import express from "express"
import "dotenv/config"
import app from "./app.js"

const PORT = process.env.PORT

app.get("/up", (req, res)=>{
    res.json("Server is up and runnnig")
})

app.listen(PORT, (err)=>{
    console.log("Server Started");
});

const shutdown = async ()=>{
    try 
    {
        console.log("Server closed");
        process.exit(0);
    } 
    catch(err) 
    {
        process.exit(1);
    }
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);