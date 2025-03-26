import express from 'express';
import cors from 'cors';
import {getPassword, getGuardian, getGuardianRelation} from './database.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/sms/:username/password", async (req, res) => {
    try {
      const rows = await getPassword(req.params.username);
      if (rows.length == 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.send(rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message || "Something went wrong" });
    }
  });

app.get("/sms/:username/guardian", async (req, res) => {
    try {
      const rows = await getGuardian(req.params.username);
      if (rows.length == 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.send(rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message || "Something went wrong" });
    }
  });

  app.get("/sms/:username/guardian_relation", async (req, res) => {
    try {
      const rows = await getGuardianRelation(req.params.username);
      if (rows.length == 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.send(rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message || "Something went wrong" });
    }
  });

  app.listen(8080, () => {
    console.log('Server started on http://localhost:8080/sms');
  });