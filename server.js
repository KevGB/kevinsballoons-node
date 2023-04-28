const express = require('express');
const app = express();

const indexRouter = require('./routes/indexRouter');
const galleryRouter = require('./routes/galleryRouter');
const contactRouter = require('./routes/contactRouter');
const bookingRouter = require('./routes/bookingRouter');
const servicesRouter = require('./routes/servicesRouter');
const garlandRouter = require('./routes/garlandRouter');
const archRouter = require('./routes/archRouter');
const columnRouter = require('./routes/columnRouter');
const centerpieceRouter = require('./routes/centerpieceRouter');

app.use('/', indexRouter);
app.use('/gallery', galleryRouter);
app.use('/contact', contactRouter);
app.use('/book', bookingRouter);
app.use('/services', servicesRouter);
app.use('/services/garlands', garlandRouter);
app.use('/services/arches', archRouter);
app.use('/services/columns', columnRouter);
app.use('/services/centerpieces', centerpieceRouter);

// Your other application logic...

app.listen(3000, () => console.log('Server started on port 3000'));




