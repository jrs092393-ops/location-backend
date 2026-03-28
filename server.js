const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 10000;

app.use(cors()); 
app.use(express.json());

app.post('/api/location', (req, res) => {
  const { latitude, longitude, timestamp } = req.body;
  console.log(`[${timestamp}] New Location: Lat ${latitude}, Lng ${longitude}`);
  res.status(200).send({ status: 'success' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
