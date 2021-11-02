import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import noteRoutes from './route/notes.js';
const app = express();
// connect Database
connectDB();
//init middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/notes', noteRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
process.on('unhandledRejection', (error) => {
    console.log(`Logged Error: ${error}`);
    server.close(() => process.exit(1));
});