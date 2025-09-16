const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint for Heroku
app.get('/health', (req, res) => {
    res.json({ 
        status: 'groovy', 
        message: '🎸 70s Seattle Onsite website is running! ✨',
        timestamp: new Date().toISOString()
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🎸 Groovy server is running on port ${PORT}`);
    console.log(`✨ Visit: http://localhost:${PORT}`);
    console.log(`🚀 Ready to rock the 70s vibes!`);
});
