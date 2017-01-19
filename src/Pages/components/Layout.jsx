import React from 'react';
function  Layout(props) {
    return(
        <html>
        <head>
            <meta charSet="utf-8"/>
            <title>{props.title}</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
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