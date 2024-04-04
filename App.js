
import express from "express";
import Hello from "./Hello.js";
import Lab5 from './Lab5.js';
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
Hello(app)
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
app.listen(process.env.PORT || 4000);