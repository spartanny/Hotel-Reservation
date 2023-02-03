import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT;

// GET Requests
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/hotels', (req: Request, res: Response) => {
  res.send({
    hotels: [
      {
        Fairfield: { Name: 'Fairfield', location: 'Dehradun', cost: 4800 },
        Marriot: { Name: 'Marriot', location: 'Dehradun', cost: 6800 },
      },
    ],
  });
});

// POST Requests
app.post('/putHotels', (req: Request, res: Response) => {
  const { name, cost } = req.body;
  if (name === undefined || name === '') res.status(400).send();

  console.log(`Added entry for ${name} with room price ${cost}`);
  res.status(200).send(`Successfully added Hotel : ${name} to database`);
});

// PUT/UPDATE Requests

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
function v4() {
  throw new Error('Function not implemented.');
}

