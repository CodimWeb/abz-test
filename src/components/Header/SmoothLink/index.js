import React from 'react';
import { Link }  from 'react-scroll';

const SmoothLink = (props) => {
    const { sectionId, offset, children } = props;
    return (
        <Link
            href="#"
            className="link nav-menu__link"
            activeClass="active"
            to={sectionId}
            spy={true}
            smooth={true}
            duration={500}
            offset={offset}
        >
            { children }
        </Link>
    )
}

export default SmoothLink