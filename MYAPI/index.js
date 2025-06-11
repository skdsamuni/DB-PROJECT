const express = require('express');
const cors = require('cors');
const pool = require('./db'); // your db.js
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(express.json());


// Root test route

app.get('/', async (req, res) => {
    try {
        res.json('Nuclear Bomb is ACTIVE!');
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});


//Getting tables from PorteSQL

const tables = [
  'facilities', 'nuclear_devices', 'materials', 'components', 'personnel',
'maintenance_logs', 'audits', 'security_incidents', 'treaty_compliance', 'device_movements'
];


// Dynamically create GET routes
for (const table of tables) {
  app.get(`/${table}`, async (req, res) => {
    try {
      const result = await pool.query(`SELECT * FROM ${table}`);
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
}


//Count Routes
const countTables = [
   'facilities', 'nuclear_devices', 'materials', 'components', 'personnel',
'maintenance_logs', 'audits', 'security_incidents', 'treaty_compliance', 'device_movements'

];

// Dynamic GET count routes (keeps underscores in URLs)
for (const table of countTables) {
  app.get(`/total${table}`, async (req, res) => {
    try {
      const result = await pool.query(`SELECT COUNT(*) FROM ${table}`);
      res.json(result.rows[0]); // returns { count: 'X' }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
}



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});