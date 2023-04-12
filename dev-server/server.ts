import express, { Express, Request, Response } from 'express';

const port: number = 5000;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
