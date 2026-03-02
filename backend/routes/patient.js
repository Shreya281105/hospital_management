const router = require("express").Router();
const Patient = require("../models/Patient");

// Add Patient
router.post("/add", async (req,res)=>{
    const patient = new Patient(req.body);
    await patient.save();
    res.send("Patient Saved in Database");
});

// Get Patients
router.get("/", async(req,res)=>{
    const patients = await Patient.find();
    res.json(patients);
});

module.exports = router;