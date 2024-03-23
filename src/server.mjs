import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 by default

// Serve static files from the 'public' directory
app.use(express.static('./src/public'));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile('./src/public/index.html', { root: import.meta.url });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// This code V for running from VS the coe above is for CodeSandBox ^
// import express from 'express';
// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();

// const PORT = process.env;

// // Serve static files from the 'public' directory
// app.use(express.static(join(__dirname, 'public')));

// // Serve the HTML file
// app.get('/', (req, res) => {
//     res.sendFile('index.html', { root: join(__dirname, 'public') });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
