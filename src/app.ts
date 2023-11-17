import cors from 'cors';
import express, { Application } from 'express';
import { StudentRoutes } from './modules/student/student.routes';

const app: Application = express();

// middlewares
app.use(express.json());
app.use(cors());

// app router
app.use('/api/v1/students', StudentRoutes);

export default app;
