let dbConnect = require("./mongodb");
let express = require("express");
let app = express();
let port = 3000;
app.use(express.json());
app.put("/", async (req, res) => {
  try {
    let data = await dbConnect();
    let result = await data.updateOne({ name: "husain" }, { $set: req.body });
    console.log(result);
    res.send({ result: "update" });
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).send({ result: "update failed" });
  }
});
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
