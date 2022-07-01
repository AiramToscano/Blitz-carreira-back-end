import express from 'express';
import ListRoute from './routes/ListRoute';

const app = express();

app.use(express.json());
app.use(ListRoute);
const PORT = 3000;

app.listen(PORT, () => {});
