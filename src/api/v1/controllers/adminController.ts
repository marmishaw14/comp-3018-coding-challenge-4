import { Request, Response, NextFunction } from "express";
import {auth} from "../../../config/firebaseConfig";
import { HTTP_STATUS } from "../../../constants/httpConstants";

export const setCustomClaims = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { uid, claims} = req.body;

    try {
        await auth.setCustomUserClaims(uid, claims);

        res.status(HTTP_STATUS.OK).send("Ok");
    } catch (error) {
        next(error);
    }
};