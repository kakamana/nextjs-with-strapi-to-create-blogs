import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const navItems = [
        { 
            display: 'the camp.',
            slug: '/',    
        },
        { 
            display: 'the exerience.',
            slug: '/experience',    
        },
        { 
            display: 'the blog.',
            slug: '/blog',    
        },
        { 
            display: 'the events.',
            slug: '/events',    
        },
    ];

    const policies = [
        { 
            display: 'Privacy Policy',
            slug: '/privacy-policy',    
        },
        { 
            display: 'Terms and Conditions',
            slug: '/terms-and-conditions',    
        },
        { 
            display: 'Cookie Policy',
            slug: '/cookie-policy',    
        },
    ];

  return <footer className='footer'>
    <nav className='footer__nav'>
        <img className='footer__logo' src="/assets/logo.svg" alt="logo" />
        <ul className='footer__links'>
            {navItems.map((item, index) => (
                <li key={index}>
                    <Link href={item.slug}>
                        <h5>{item.display}</h5>
                    </Link>
                </li> 
            ))}
        </ul>  
    </nav>
    <div className="footer__policies">
    <ul className='footer__policies-nav'>
            {policies.map((item, index) => (
                <li key={index}>
                    <p className='copy'>{item.display}</p>
                </li> 
            ))}
        </ul> 
        <p className="copy">
            © 2021 Camp Experiences. All Rights Reserved.
        </p>
    </div>
    </footer>
}

export default Footer