const express = require('express');
const path = require('path');
const mysql = require("mysql2");

const app = express();
const port = 3000;

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
    res.sendFile(path.join(__dirname, "signup.html"));
});

app.post('/submit', (req, res) => {

    const empId = 'OIRICH20260002'; 
    const role = 'Employee'; 
    const { name, email, phone, pwd } = req.body;
    
    const sql = "INSERT INTO Employee_Info (Emp_ID, Name, Email, Phone, Password, Roles) VALUES(?,?,?,?,?,?)";

    con.query(sql, [empId, name, email, phone, pwd, role], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database Error: " + err.message);
        }
        res.send(`/dash?role=${role}`);
    });
});
app.get('/dash', (req, res) => {
    const role = req.query.role;

    if (role === 'HR' || role === 'Admin') {
        res.sendFile(path.join(__dirname, 'dashboard.html'));
    } else if (role === 'Employee') {
        res.sendFile(path.join(__dirname, 'Employee.html'));
    } else {
        res.status(403).send("Access Denied.");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});