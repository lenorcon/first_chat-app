const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is the homepage!');
});

// Add more routes as needed...

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
  });
  
  app.get('/contact', (req, res) => {
    res.send('This is the contact page.');
  });
  