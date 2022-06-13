/////////////
// MongoDB //
/////////////
const { MongoClient } = require('mongodb');
// let db = null;

async function connectDB() {
  const uri =
    'mongodb+srv://' +
    process.env.DB_USERNAME +
    ':' +
    process.env.DB_PASS +
    '@' +
    process.env.DB_HOST +
    '/' +
    process.env.DB_NAME +
    '/?retryWrites=true&w=majority';

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
  } catch (error) {
    throw error;
  }
}

module.exports = connectDB;

// const mongoose = require('mongoose');

// const connectionString = 'mongodb+srv://HanOssef:${process.env.DB_PASSWORD}@pawdoption.rnula.mongodb.net/?retryWrites=true&w=majority';

// const connectDB = () => {
//   try {
//     mongoose.connect(connectionString, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('DB - connected');
//   } catch (err) {
//     console.log('error occured while trying');
//     throw err;
//   }
// };

// module.exports = connectDB;

// testttttt 2
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   const conn = await mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   });

//   console.log(`MongoDB Connected: ${conn.connection.host}`);
// };

// module.exports = connectDB;
