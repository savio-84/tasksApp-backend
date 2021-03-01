import express from 'express';

const app = express();
const port = 3333;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at ${port} door!`);
});
