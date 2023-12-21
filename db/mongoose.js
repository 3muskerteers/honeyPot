// db/mongoose.js

import mongoose from "mongoose";
import 'dotenv/config'

mongoose.set('strictQuery', false);

export function connection() {
    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;
    const cluster = process.env.DB_CLUSTER;
    const dbname = process.env.DB_NAME;

    mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`);

    const db = mongoose.connection;

    db.on('error', (error) => {
        console.error('MongoDB connection error:', error);
    });

    db.once('open', () => {
        console.log('Connected to atlas MongoDB');
    });
}
