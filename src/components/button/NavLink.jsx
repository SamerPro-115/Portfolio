import React from 'react';
import { NavLink as NavLinkBootstrap } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavLink = React.forwardRef(({ children, to, ...restProps }, ref) => {
    // Check if the URL is external
    const isExternal = to?.startsWith('http') || to?.startsWith('https');
    
    return (
        <NavLinkBootstrap 
        target='_blank'
            as={to ? (isExternal ? 'a' : Link) : 'a'}
            to={!isExternal ? to : undefined}
            href={isExternal ? to : undefined}
            {...restProps} 
            ref={ref}
        >
            {children}
        </NavLinkBootstrap>
    );
});

NavLink.displayName = 'NavLink';

export default NavLink;