import express, { Application } from "express"
import { envVariables } from "./config/envVariables"
import { DB } from "./config/DataBase"
import { mainApp } from "./mainApp"


const realPort: number = parseInt(envVariables.POST!)
const port: number = realPort
const app:Application = express()
mainApp(app)

const server = app.listen(port,()=>{
    DB()
    console.log(`serveris live on ${port} and ${DB}`)
})

process.on("uncaughtException",(err:any)=>{
    console.log("server is shutting down due to uncaughtException");
    console.log("uncaughtException", err);

    process.exit(1);

})
process.on("unhandleRejection",(reason:any)=>{
    console.log("server is shutting down due to unhandledRejection");
    console.log("unhandledRejection", reason);

        server.close(()=>{
   process.exit(1);
        })

})