const express = require("express");
const app = express();
const movesRouter = require("./routes/valid_moves");
const cors = require("cors");
const bodyParser = require("body-parser");
const { pieces } = require("./pieces");

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/valid_moves", movesRouter);

app.listen(3000, () => console.log("Listening on port 3000"));
