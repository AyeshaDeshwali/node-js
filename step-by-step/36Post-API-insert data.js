const express = require("express");
const dbConnect = require("./mongodb");
const app = express();

const PORT = 5000;
app.use(express.json());
app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find({}).toArray();
  console.log(data);
  res.send(data);
});

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });

app.post("/", async (req, res) => {
  let data = await db.dbConnect();
  let result = await data.insert(req.body);
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
