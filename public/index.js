"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT;
// GET Requests
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get('/hotels', (req, res) => {
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
app.post('/putHotels', (req, res) => {
    const { name, cost } = req.body;
    if (name === undefined || name === '')
        res.status(400).send();
    console.log(`Added entry for ${name} with room price ${cost}`);
    res.status(200).send(`Successfully added Hotel : ${name} to database`);
});
// PUT/UPDATE Requests
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
