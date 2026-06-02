import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError.js";

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction): void {
    
    if(error instanceof AppError){
        res.status(error.statusCode).json({
            status: "error",
            message: error.message,
        })
        return;
    }

    console.log("Internal server error!", error)

    res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
}