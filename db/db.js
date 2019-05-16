const mongoose = require('mongoose');

const connectionString = "mongodb://localhost/BPI";

mongoose.connect(process.env.MONGODB_URI || connectionString, {       
  useNewUrlParser: true,
});

mongoose.connection.on('connected', () => {
  console.log('mongoose connected to ', connectionString, 'Mongoose is flyin');
});

mongoose.connection.on('disconnected', () => {
  console.log('We lost all our data, mongoose disconnected from ', connectionString);
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});
