import express, { Express } from "express";
import adminRoutes from "./api/v1/routes/adminRoutes";
import projectRoutes from "./api/v1/routes/projectRoutes";

/**
 * Represents response structure for health check endpoint
 */
interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

// Initialize Express application
const app: Express = express();

app.use(express.json());

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Define health check route
app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});

app.use("/api/v1/", adminRoutes);
app.use("/api/v1/", projectRoutes);

export default app;