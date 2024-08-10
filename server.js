const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: userMessage,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`
      }
    });

    const aiResponse = response.data.choices[0].text.trim();
    res.json({ message: aiResponse });
  } catch (error) {
    res.status(500).send('Error communicating with AI');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
