import dotenv from "dotenv"
dotenv.config();

export const envVariables = {
    POST: process.env.PORT,
    DATABASE: process.env.DATABASE,
    CLOUDNAME:process.env.CLOUDNAME,
    CLOUDKEY: process.env.CLOUDKEY,
    CLOUDSECRET: process.env.CLOUDSECRET,
};