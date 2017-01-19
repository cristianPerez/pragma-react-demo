import React from 'react';
function  Layout(props) {
    return(
        <html>
        <head>
            <meta charSet="utf-8"/>
            <title>{props.title}</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" />
            <link rel="stylesheet" href="http://localhost:3001/styles.css"/>
        </head>
        <body>
        <div id="render-target"
             dangerouslySetInnerHTML={{
                 __html: props.content
             }}>
        </div>
        <script src="http://localhost:3001/app.js"></script>
        </body>
        </html>
    )
}

export default Layout;