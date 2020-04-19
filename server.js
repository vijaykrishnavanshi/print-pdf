'use strict';

const { printPDF } = require('./print-pdf')

const express = require('express');
const puppeteer = require('puppeteer');
const app = express();

app.use(printPDF);

const server = app.listen(process.env.PORT || 8080, err => {
    if (err) return console.error(err);
    const port = server.address().port;
    console.info(`App listening on port ${port}`);
  });

module.exports = app;