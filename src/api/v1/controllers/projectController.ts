import { Request, Response } from "express";
import { createProjectService } from "../services/projectService";
import {HTTP_STATUS} from "../../../constants/httpConstants";

export const createProject = async (req: Request, res: Response) => {
    let newProject = req.body;

    let result = createProjectService(newProject)
    res.status(HTTP_STATUS.CREATED).json(result);
}