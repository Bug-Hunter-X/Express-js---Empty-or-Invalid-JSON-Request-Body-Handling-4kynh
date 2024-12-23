const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Request body is empty' });
  }
  try {
    console.log(req.body);
    res.send('User created');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return res.status(400).json({ error: 'Invalid JSON in request body' });
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});