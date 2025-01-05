import express from "express";
import tasks from "../controllers/task.js";

const app = express();

app.post("/", tasks.addTask);
app.get("/", tasks.getTask);
app.get("/:id", tasks.getTaskById);
app.put("/:id", tasks.updateTaskStatus);
app.delete("/:id",tasks.deleteTask);
export default app;
