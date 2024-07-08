import express from 'express';

import ApplyMiddlewares from '../middlewares';
import router from '../routes';

const { PORT } = process.env;

const app = express(); // Initializing an express app

ApplyMiddlewares(app); // Applying middlewares

app.use(router); // handling routes

// Starting the server and listening on the port
app.listen({ port: PORT }, () => {
  console.log(`app listening on port ${PORT}!`);
});

export default app;
