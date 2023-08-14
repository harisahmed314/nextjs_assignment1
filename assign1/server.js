const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Register API Endpoint
app.post('/register', (req, res) => {
    // Read the existing users
    fs.readFile('userData.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ message: 'Error reading file.' });
        }

        let users = [];
        try {
            users = JSON.parse(data);
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }

        // Check if user email already exists
        const newUser = req.body;
        if (users.some(user => user.email === newUser.email)) {
            return res.status(400).send({ message: 'Email already registered.' });
        }

        // Add new user to the list
        users.push(newUser);

        // Write back to userData.json
        fs.writeFile('userData.json', JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).send({ message: 'Error writing to file.' });
            }
            res.send({ message: 'Registration successful!' });
        });
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
