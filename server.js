const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/rane_agro_farms")
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error);
    });

const workerSchema = new mongoose.Schema({
    name: String,
    village: String,
    wage: Number
});

const Worker = mongoose.model("Worker", workerSchema);

app.get("/", (req, res) => {
    res.send("RANE AGRO FARMS MERN Backend is Running!");
});

app.post("/workers", async (req, res) => {
    const worker = new Worker(req.body);
    await worker.save();

    res.status(201).json({
        message: "Worker added successfully",
        worker: worker
    });
});
app.get("/workers", async (req, res) => {
    const workers = await Worker.find();
    res.json(workers);
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});