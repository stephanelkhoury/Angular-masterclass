const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/angular-ecommerce')));

// Send all other requests to the Angular app
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/angular-ecommerce/index.html'));
});

// Start the server
const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
