import { Application } from "express";
// import { HTTP, mainError } from "./error/mainError";
import express from "express"
import cors from "cors"
// import { errHandler } from "./error/errrorBuilder";
import userRouter from "./router/userRouter"





export const mainApp = (app:Application)=>{
    app.use(express.json());
    app.use(cors());
    app.use("/api/v1",userRouter)
  
    app.get("/")
  }

    // app.all("*", (req: Request, res: Response, next: NextFunction) => {
    //         next(
    //           new mainError({
    //             name: "Router Error",
    //             message: `This error came as a result of ${req.originalUrl} URL incorrect`,
    //             status: HTTP.BAD,
    //             success: false,
    //           })
    //         );
    //       });
        
    //       app.use(errHandler);
        



// after default get
// app.all("*", (req: Request, res: Response, next: NextFunction) => {
//     next(
//       new mainError({
//         name: "Router Error",
//         message: `This error came as a result of ${req.originalUrl} URL incorrect`,
//         status: HTTP.BAD,
//         success: false,
//       })
//     );
//   });

//   app.use(errHandler);
// })