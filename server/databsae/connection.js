const mongoose = require('mongoose');

const URI ="mongodb+srv://nithish:pass@cluster0.qf6hd.mongodb.net/courier?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log('db connected..!');
  }
  catch (err) {
    console.log(err)
  }
};

module.exports = connectDB;
