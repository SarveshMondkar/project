import connectDB from "./db/index.js";
import dotenv from 'dotenv';
import {app} from './app.js';

dotenv.config({path: './env'});


connectDB()
.then(() => {
    console.log("Database connection established successfully.");  
    app.listen(process.env.PORT || 8000, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    });
})
.catch((error) => { 
    console.error("Failed to connect to the database:", error);
    process.exit(1);
});




/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/