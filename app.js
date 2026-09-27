const http = require('http');
const next = require('next');

const port = Number.parseInt(process.env.PORT || '3000', 10);
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer((request, response) => handle(request, response)).listen(port, () => {
    console.log(`> Ready on port ${port}`);
  });
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
