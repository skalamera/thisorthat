const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'storybook.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🎭 Magical Storybook Server is running!`);
    console.log(`📖 Open your browser and go to: http://localhost:${PORT}`);
    console.log(`✨ Your storybook is ready to create magical adventures!`);
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send(`
        <html>
            <head>
                <title>Page Not Found</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        text-align: center; 
                        padding: 50px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                    }
                    h1 { font-size: 3em; margin-bottom: 20px; }
                    a { color: #ffd700; text-decoration: none; }
                    a:hover { text-decoration: underline; }
                </style>
            </head>
            <body>
                <h1>✨ Oops! ✨</h1>
                <p>This page doesn't exist in our magical storybook.</p>
                <p><a href="/">🏠 Go back to the storybook</a></p>
            </body>
        </html>
    `);
});
