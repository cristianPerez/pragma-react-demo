import express from 'express';
import React from 'react'
import { renderToString } from 'react-dom/server';
import {serverRouter, createServerRenderCountext } from 'react-router';

import Home from './Home.jsx';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type','text/html');
  const html = renderToString(
    <Home />
  );
  res.write(html);
  res.end();
});

export default router
