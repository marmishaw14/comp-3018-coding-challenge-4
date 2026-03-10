import express from "express";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import { createProject } from "../controllers/projectController";

const projectRouter = express.Router();

// Only admin and lead can create a project
projectRouter.post(
    "/projects",
    authenticate,
    isAuthorized({ hasRole: ["admin", "lead"] }),
    createProject
);

export default projectRouter;