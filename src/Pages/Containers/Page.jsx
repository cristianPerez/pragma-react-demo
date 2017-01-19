/**
 * Created by Juan on 1/19/2017.
 */
import React from 'react';
import {Match,Miss,Link} from 'react-router';

import Home from './Home.jsx'
import Posts from './Posts.jsx'
import About from './About.jsx'

function Pages(){
    return(
        <main role="application">
            <Match pattern="/" exactly component={Home}/>
            <Match pattern="/posts" exactly component={Posts}/>
            <Match pattern="/about" exactly component={About}/>
        </main>
    )
}

export default Pages;