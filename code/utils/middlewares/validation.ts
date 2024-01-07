import { Request, Response, NextFunction } from "express";
// import { IncomingRequest } from "../schemas/interface";


// Define the middleware function
function myMiddleware(req: Request, res: Response, next: NextFunction) {
    // Extract the request body and validate it
    // const data: IncomingRequest = req.body;

    // if () {

    // }

    // If validation is successful, you can continue to the next middleware or route handler
    next();
}

export { myMiddleware };
