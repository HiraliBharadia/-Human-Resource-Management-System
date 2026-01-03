const express = require("express");
const path = require("path");
const mysql = require("mysql2");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));


const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dune7829@sk",
  database: "Odoo"
});

con.connect(err => {
  if (err) console.error("MySQL connection failed:", err);
  else console.log("MySQL connected");
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "signin.html"));
});

app.get("/dashboard", (req, res) => {
  const { auth } = req.query;
  if (auth === "true") {
  } else {
    res.send("<h1>Access Denied. Please login first.</h1>");
  }
});


app.post("/login", (req, res) => {
  const { login, password } = req.body;
  const sql = `SELECT * FROM Employee_Info WHERE (Emp_ID = ? OR Email = ?) AND Password = ?`;

  con.query(sql, [login, login, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database Error");
    }
    
    if (result.length === 0) {
      return res.status(401).send("Invalid Credentials");
    }

    const user = result[0];

    if (user.Roles === 'HR' || user.Roles === 'Admin') {
      res.send("/dashboard.html?auth=true");
    } else if (user.Roles === 'Employee') {
      res.send("/Employee.html?auth=true"); 
    } else {
      res.status(403).send("Access Denied: No Role Assigned");
    }
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));