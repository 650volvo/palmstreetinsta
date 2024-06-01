const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;
const cors = require('cors');

app.use(cors());
app.get('/api/images', async (req, res) => {
  try {
    // Replace with your actual API call
    const response = await axios.get('https://picsum.photos/v2/list');
    const images = response.data; // Assuming response.data contains the images array
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;