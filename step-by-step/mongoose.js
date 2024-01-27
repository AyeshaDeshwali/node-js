let mongoose = require("mongoose");

let main = async () => {
  await mongoose.connect("mongodb://localhost:27017");

  let schema = new mongoose.Schema({
    name: String,
  });

  const Product = mongoose.model("Product", schema); // "Product" is the model name

  let productInstance = new Product({
    name: "aashiya",
  });

  try {
    let result = await productInstance.save();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  } finally {
    mongoose.disconnect();
  }
};

main();
