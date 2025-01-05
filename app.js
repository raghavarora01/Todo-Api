import express from 'express';
import authRoute from "./routes/auth.js";
import cookieParser from 'cookie-parser';
import authMiddleware from './middlewares/middleware.js'; 
import taskRoutes from "./routes/task.js";
const app = express();
const PORT = 9898;
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRoute);
app.use("/api/tasks",  authMiddleware,taskRoutes);
app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`);
})