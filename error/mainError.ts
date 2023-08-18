export const enum HTTP{
    OK = 200,
    BAD = 404,
    CREATE = 201
}

interface iError  {
    name: string,
    success: boolean,
    status: HTTP,
    message: string
}

export class mainError extends Error{
    public readonly name: string;
    public readonly message: string;
    public readonly status: HTTP;
    public readonly success: boolean = false;

    constructor(args: iError){
        super(args.message);

        Object.setPrototypeOf(this, new.target.prototype);

        this.name = args.name;
        this.message = args.message;
        this.status = args.status;

        if (this.success !== undefined){
            this.success = args.success;
        }
    
       Error.captureStackTrace(this);

    }

}