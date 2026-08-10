const mongoose = require('mongoose');
const uri = "mongodb+srv://settlecred_db_user:TCmBxhkx7jIro0oc@cluster0.n9jkwna.mongodb.net/?appName=Cluster0";
mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log("Successfully connected to MongoDB");
    process.exit(0);
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });
