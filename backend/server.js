const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin123@cluster0.qxef0sw.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
const patientRoute = require("./routes/patient");
app.use("/patients", patientRoute);

// Test Route
app.get("/", (req, res) => {
    res.send("🏥 Hospital Management System API Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});