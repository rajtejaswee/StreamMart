import express from "express";
import { app } from './app.js'
import dotenv from "dotenv";

dotenv.config()


app.listen(process.env.PORT || 80000, () => {
    console.log(`Server is running at port : ${process.env.PORT}`)
})