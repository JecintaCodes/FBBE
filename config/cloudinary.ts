import {v2 as cloudinary} from "cloudinary"
import { envVariables } from "../config/envVariables" 

cloudinary.config({
    cloud_name:envVariables.CLOUDNAME,
    api_key: envVariables.CLOUDKEY,
    api_secret: envVariables.CLOUDSECRET,
    secure: true,

})

export default cloudinary;


