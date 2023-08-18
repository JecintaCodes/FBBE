import {Router} from "express"
import {registerUser,getUsers,signInUser,getOneUser,updateUser, deleteUser} from "../controller/userController"
import upload from "../config/multer"

const userRouter = Router();


userRouter.route("/sign-up").post(upload, registerUser )
userRouter.route("/sign-in").post( signInUser )
userRouter.route("/get-users").get( getUsers )
userRouter.route("/userID/get-one-user").get( getOneUser )
userRouter.route("/userID/update-user").patch( updateUser )
userRouter.route("/userID/delete-user").delete( deleteUser )

export default userRouter 