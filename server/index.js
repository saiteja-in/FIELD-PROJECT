const express = require('express');
const app = express();
const sqlServer = require("mssql");
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(3002, () => {
    console.log('server running on port 3002');
});

// SQL Server configuration
const dbConfig = {
    user: 'sa',
    password: 'saiteja',
    server: 'SAITEJA',
    database: 'vnrdb',
    options: {
        encrypt: true,
        trustServerCertificate: true,
        connectTimeout: 86400000,
    },
    pool: {
        min: 2,
        max: 10,
        acquireTimeoutMillis: 60000,
    },
    debug: true,
};

async function connectToDatabase() {
    try {
        const pool = await sqlServer.connect(dbConfig);
        console.log("Connected to the SQL Server database");
        app.set("dbPool", pool);
    } catch (err) {
        console.error("Database connection failed:", err);
    }
}

connectToDatabase();

app.post('/register', async (req, res) => {
    const sentEmail = req.body.Email;
    const sentFacultyID = req.body.FacultyID;
    const sentPassword = req.body.Password;

    const SQL = 'INSERT INTO users (email, facultyid, password) VALUES (@Email, @FacultyID, @Password)';

    try {
        const pool = app.get('dbPool');
        const request = pool.request();
        request.input('Email', sqlServer.NVarChar, sentEmail);
        request.input('FacultyID', sqlServer.NVarChar, sentFacultyID);
        request.input('Password', sqlServer.NVarChar, sentPassword);
        await request.query(SQL);
        console.log('User inserted successfully!');
        res.send({ message: 'User added!' });
    } catch (err) {
        res.send(err);
    }
});

app.post('/login', async (req, res) => {
    const sentloginFacultyID = req.body.LoginFacultyID;
    const sentLoginPassword = req.body.LoginPassword;

    const SQL = 'SELECT * FROM users WHERE facultyid = @FacultyID AND password = @Password';

    try {
        const pool = app.get('dbPool');
        const request = pool.request();
        request.input('FacultyID', sqlServer.NVarChar, sentloginFacultyID);
        request.input('Password', sqlServer.NVarChar, sentLoginPassword);
        const result = await request.query(SQL);

        if (result.recordset.length > 0) {
            res.send(result.recordset);
        } else {
            res.status(401).send({ message: 'Credentials don\'t match!' });
        }
    } catch (err) {
        console.log('Error:', err);
        res.status(500).send({ message: 'An error occurred while processing your request' });
    }
});
