import express from 'express';
import path from 'path';
import fs from 'fs';
import morgan from 'morgan';
import config from './config';
import serverRender from './serverRender';

const app = express();

const { port } = config;

const initialContent = serverRender();

app.use(morgan('combined'));

app.get('/', (_req, res) => {
  const indexFile = path.resolve('./public/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Nothing here');
    }
    return res.send(
      data.replace('::APP_HERE::', initialContent),
    );
  });
});

// TODO: This should come after app.get!!!!!
app.use(express.static('public'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`App Listening on ${port}`);
});

export default app;
