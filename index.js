import express from 'express';
import mongoose from 'mongoose';
const app = express();
const PORT = 3000;
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Started at port ${PORT}`);
})