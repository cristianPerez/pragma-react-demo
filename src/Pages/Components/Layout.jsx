import React from 'react';
function  Layout(props) {
    return(
        <html>
        <head>
            <meta charSet="utf-8"/>
            <title>{props.title}</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
            <link rel="stylesheet" href="/styles.css"/>
        </head>
        <body>
        <div id="render-target"
             dangerouslySetInnerHTML={{
                 __html: props.content
             }}>
        </div>
        <script src="/app.js"></script>
        </body>
        </html>
    )
}

export default Layout;