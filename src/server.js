import app from './app';

// Default settings.
const port = process.env.PORT || 3000;
const host = process.env.HOSTNAME || '0.0.0.0';

// Launch Node.js server.
const server = app.listen(port, host, () => {
  console.log(`Node.js API server is listening on http://${host}:${port}/`);
});

// TODO: add exception handling.
