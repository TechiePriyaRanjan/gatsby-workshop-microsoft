import React from 'react';
import Link from 'gatsby-link';

// const makeNavigation() =>{

// }

const Navigation = () => {
    return <nav>
        <ul>
            <li><Link>home</Link></li>
            <li><Link>porfolio</Link></li>
            <li><Link>about</Link></li>
            <li><Link>blog</Link></li>
        </ul>
    </nav>
}

export default Navigation;