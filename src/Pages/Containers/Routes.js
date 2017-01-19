import React from 'react'
import { renderToString } from 'react-dom/server';
import { ServerRouter, createServerRenderContext } from 'react-router';

import Pages from './Page.jsx'

/* GET home page. */
var router = function(req, res, next) {

    const context = createServerRenderContext();

    res.setHeader('Content-Type','text/html');

    const html = renderToString(
        <ServerRouter location={req.originalUrl} context={context}>
          <Pages/>
        </ServerRouter>
    );

    const result = context.getResult();

    if(result.redirect){
        res.writeHead(301,{Location:result.redirect.pathname});
        res.end();
    }

    if(result.missed){
        res.writeHead(404);
    }

    res.write(html);
    res.end();

};

export default router
