const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());

app.post('/location', (req, res) => {
  const { latitude, longitude, timestamp } = req.body;
  console.log('Received location:', latitude, longitude, timestamp);
  res.send('Location received');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 
// Add this to server.js
app.use(express.json()); // Allows the server to read JSON data

app.post('/api/location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Received location: ${latitude}, ${longitude}`);
    res.status(200).send({ message: 'Location updated' });
});
