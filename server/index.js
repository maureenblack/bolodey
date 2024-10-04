
import express from 'express';

const app = express();

app.get('/api/data', (req, res) => {
  const data = { message: "Hello from the backend!" };
  console.log(data);
  res.json(data);
});