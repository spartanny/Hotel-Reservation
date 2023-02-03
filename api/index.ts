import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT;

// Vercel Boilerplate test code

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

//

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

