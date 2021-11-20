const express = require('express');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

const { usersRouter } = require('./routers/usersRouter');
const { ordersRouter } = require('./routers/ordersRouter');
const { restaurantsRouter } = require('./routers/restaurantsRouter');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger('dev'));

app.use('/api/users', usersRouter);
app.use('/api/restaurants', restaurantsRouter);
app.use('/api/orders', ordersRouter);

app.use((req, res) => {
    res.status(400).send('Something is broken!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
