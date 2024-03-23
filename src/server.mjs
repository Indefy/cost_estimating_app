import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = process.env;

// Serve static files from the 'public' directory
app.use(express.static(join(__dirname, 'public')));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: join(__dirname, 'public') });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
