const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Your other route definitions
// ...

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
