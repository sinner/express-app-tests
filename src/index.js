// @ts-nocheck
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import usersController from './routes/users.controller.js';
import productsController from './routes/products.controller.js';

const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.use('/users', usersController);
app.use('/products', productsController);


app.get('/health-check', (req, res) => {
  res.send('OK');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
