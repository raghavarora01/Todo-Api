import database from "../database.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const jwt_secretkey = process.env.SECURITY_KEY || "default_secret";
const registerUser = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }
  
    const select_query = "SELECT * FROM user WHERE username = ?";
  
    database.query(select_query, [username], async (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }
  
      if (result.length) {
        return res.status(400).json({ error: "User already exists" });
      }
  
      // Hashing the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const insertQuery = "INSERT INTO user (username,password) VALUES (?, ?)";
      const values = [username, hashedPassword];
  
      database.query(insertQuery, values, (err, result) => {
        if (err) {
          return res.status(500).json({ error: "Database error" });
        } else {
          const token = jwt.sign({ id: result.insertId, username }, jwt_secretkey);
          res.setHeader('Authorization', `Bearer ${token}`);
          return res.status(201).json({ message: "User registered successfully" });
        }
      });
    });
  };
  const login = (req, res) => {
    const username = req.body.username;
    const reqpassword = req.body.password;
  
    const login_query = "SELECT * FROM user WHERE username = ?";
    database.query(login_query, [username], (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }
  
      if (result.length == 0) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const user = result[0];
      const ispasswordvalid = bcrypt.compareSync(reqpassword, user.password);
  
      if (!ispasswordvalid) {
        return res.status(401).json({ error: "Invalid Password" });
      }
  
      const token = jwt.sign(
        { id: user.id, username: user.username },
        jwt_secretkey
      );
  
      
      res.cookie('jwtcookie', token, { httpOnly: true });
      return res.status(200).json({ message: "Login successful" ,
        token
      });
    });
  };
  const logout = (req, res) => {
    res.clearCookie('jwtcookie'); // Clear the JWT cookie
    return res.status(200).json({ message: "Logout successful" });
};

export default { registerUser, login, logout };


  