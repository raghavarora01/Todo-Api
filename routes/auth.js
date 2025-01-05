import express from "express";
const app = express();
import authentication from "../controllers/auth.js";
app.post('/register',authentication.registerUser);
app.post('/login',authentication.login);
app.post('/logout',authentication.logout);
export default app;
