import database from "../database.js";

// Add a new task
const addTask = (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: "Title and description are required" });
    }

    const query = `INSERT INTO tasks (title, description, status) VALUES (?, ?, 'pending')`;
    database.query(query, [title, description], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            message: "Task created successfully",
            task: { id: result.insertId, title, description, status: "pending" },
        });
    });
};

// Get all tasks
const getTask = (req, res) => {
    const query = `SELECT * FROM tasks`;
    database.query(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ tasks: rows });
    });
};

// Get a task by ID
const getTaskById = (req, res) => {
    const { id } = req.params;

    const query = `SELECT * FROM tasks WHERE id = ?`;
    database.query(query, [id], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (rows.length === 0) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json({ task: rows[0] });
    });
};
// Update the status of a task by ID
const updateTaskStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    const validStatuses = ["pending", "in-progress", "completed"];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ error: "Invalid status. Valid values are: pending, in-progress, completed." });
    }

    const query = `UPDATE tasks SET status = ? WHERE id = ?`;
    database.query(query, [status, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.json({ message: "Task status updated successfully" });
    });
};
//Delete a Task by Id
const deleteTask = (req,res)=>{
    const {id} = req.params;
    database.query(`delete from tasks where id = ?`, id,(err,result)=>{
        if(err){
            return res.status(404).json({
                error :" database error"
            })
        }
        return res.status(200).json({
            message : "Successfully deleted"
        })
    })
}
export default { addTask, getTask, getTaskById, updateTaskStatus,deleteTask };
