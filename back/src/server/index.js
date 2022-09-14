const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

require('../app/routes/postRoutes')(app);
require('../app/routes/userRoutes')(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});