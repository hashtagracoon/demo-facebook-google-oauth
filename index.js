const express = require('express');
const app = express();

const passportService = require('./services/passport');
passportService.setup();

const defaultRoute = require('./routes/default');
const authRoute = require('./routes/auth');

const mongoose = require('mongoose');
const keys = require('./config/keys');
mongoose.connect(keys.mongoDBURI);

app.use('/', defaultRoute);
app.use('/auth', authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
