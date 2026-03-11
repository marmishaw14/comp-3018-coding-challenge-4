import { Request, Response, NextFunction } from "express";
import {auth} from "../../../config/firebaseConfig";
import { HTTP_STATUS } from "../../../constants/httpConstants";

export const setCustomClaims = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let userClaimsToSet = req.body;

    try {
        await auth.setCustomUserClaims(userClaimsToSet.uid, userClaimsToSet.claims);

        res.status(HTTP_STATUS.OK).send("Ok");
    } catch (error) {
        next(error);
    }
};