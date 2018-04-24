const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')


const app = express();
const port = process.env.PORT || 8888;

app.use(morgan('dev'));
app.use(cors());

app.use('/:locationId', express.static(path.join(__dirname, '../public')));


// app.get('/:listingId', (req, res) => {
//   res.send();
// })

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});