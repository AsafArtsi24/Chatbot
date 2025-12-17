import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import { chatController } from './controllers/chat.controller';

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
   res.send(`hello world!`);
});

app.get('/api/hello', (req: Request, res: Response) => {
   res.json({ message: 'Hello World!' });
});

const conversations = new Map<string, string>();

app.post('/api/chat', chatController.sendMessage);

app.listen(PORT, () => {
   console.log(`Server is runnig on http://localhost:${PORT}`);
});
