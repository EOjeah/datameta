import express from 'express';
import config from './config';

const app = express();
const { port } = config;

app.use(express.static('public'));

app.get('/', (_req, res) => {
  res.send('index');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`App Listening on ${port}`);
});

export default app;
