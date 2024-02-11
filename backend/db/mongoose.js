// db/mongoose.js

import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.set('strictQuery', false);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DB_NAME;


export function connection() {
  if (process.env.NODE_ENV === 'development') {
    mongoose.connect(`mongodb://localhost:27017/${dbname}`);

    const db = mongoose.connection;

    db.on('error', (error) => {
      console.error('MongoDB connection error:', error);
    });

    db.once('open', () => {
      console.log(`Connected to local development MongoDB :${dbname}`);
    });
  } else {
   

    mongoose.connect(
      `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
    );

    const db = mongoose.connection;

    db.on('error', (error) => {
      console.error('MongoDB connection error:', error);
    });

    db.once('open', () => {
      console.log(`Connected to online atlas MongoDB :${dbname}`);
    });
  }
}
