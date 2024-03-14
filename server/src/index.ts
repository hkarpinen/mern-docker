import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("indeed!");
});

app.listen(PORT, () => {
    console.log(`Express server is listening at ${PORT}`);
});