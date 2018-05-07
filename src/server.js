import app from './app';

// Default settings.
const port = process.env.PORT || 3000;
const host = process.env.HOSTNAME || '0.0.0.0';

/* eslint-disable */
console.log(`port: ${port}`);
console.log(`host: ${host}`);
/* eslint-disable */

// Launch Node.js server.
app.listen(port, host, () => {
  /* eslint-disable */
  console.log(`Node.js API server is listening on http://${host}:${port}/`);
  /* eslint-enable */
});

// TODO: add exception handling.
