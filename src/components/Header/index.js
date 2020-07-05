import React from 'react';
import SmoothLink from './SmoothLink'

class Header extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            offset:  document.body.clientWidth <= 767 ? -40 : -60,
            isOpenMenu: false,
        }
        this.resizeTimer = null;
    }

    changeOffset = () => {
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
            if(document.body.clientWidth <= 767) {
                this.setState({
                    offset: -40
                })
            } else {
                this.setState({
                    offset: -60
                })
            }
        }, 100);
    }

    toggleMenu = () => {
        this.setState({
            isOpenMenu: !this.state.isOpenMenu
        })
    }

    componentDidMount() {
        window.addEventListener('resize', this.changeOffset)
    }

    render() {
        const { offset, isOpenMenu } = this.state;
        return (
            <div className={`header ${isOpenMenu ? 'open-menu' : ''}`}>
                <div className="container">
                    <div className="row header__row">
                        <div className="col-3">
                            <a href="/">
                                <img src="img/logo.svg" className="header__logo" alt="logo"/>
                            </a>
                        </div>
                        <div className="col">
                            <div className="mobile-backdrop" onClick={this.toggleMenu}></div>
                            <div className="header__panel">
                                <div className="mobile-logo">
                                    <a href="/">
                                        <img src="img/logo.svg" className="header__logo" alt="logo"/>
                                    </a>
                                </div>
                                <nav className="header__nav">
                                    <ul className="nav-menu">
                                        <li className="nav-menu__item">
                                            <SmoothLink sectionId="about" offset={offset}>
                                                About me
                                            </SmoothLink>
                                        </li>
                                        <li className="nav-menu__item">
                                            <SmoothLink sectionId="" offset={offset}>
                                                Relationships
                                            </SmoothLink>
                                        </li>
                                        <li className="nav-menu__item">
                                            <SmoothLink sectionId="requirements" offset={offset}>
                                                Requirements
                                            </SmoothLink>
                                        </li>
                                        <li className="nav-menu__item">
                                            <SmoothLink sectionId="users" offset={offset}>
                                                Users
                                            </SmoothLink>
                                        </li>
                                        <li className="nav-menu__item">
                                            <SmoothLink sectionId="register" offset={offset}>
                                                Sign Up
                                            </SmoothLink>
                                        </li>
                                    </ul>
                                    <ul className="nav-menu mobile-menu">
                                        <li className="nav-menu__item">
                                            <a href="#" className="link nav-menu__link">How it works</a>
                                        </li>
                                        <li className="nav-menu__item">
                                            <a href="#" className="link nav-menu__link">Partnership</a>
                                        </li>
                                        <li className="nav-menu__item">
                                            <a href="#" className="link nav-menu__link">Help</a>
                                        </li>
                                        <li className="nav-menu__item">
                                            <a href="#" className="link nav-menu__link">Leave testimonial</a>
                                        </li>
                                        <li className="nav-menu__item">
                                            <a href="#" className="link nav-menu__link">Contact us</a>
                                        </li>
                                    </ul>
                                    <ul className="nav-menu mobile-menu">
                                        <li className="nav-menu__item">
                                            <a href="#" className="link nav-menu__link">Articles</a>
                                        </li>
                                        <li className="nav-menu__item">
                                            <a href="#" className="link nav-menu__link">Our news</a>
                                        </li>
                                        <li className="nav-menu__item">
                                            <a href="#" className="link nav-menu__link">Testimonials</a>
                                        </li>
                                        <li className="nav-menu__item">
                                            <a href="#" className="link nav-menu__link">Licenses</a>
                                        </li>
                                        <li className="nav-menu__item">
                                            <a href="#" className="link nav-menu__link">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <button className="btn btn-menu" onClick={this.toggleMenu}>
                                <img src="img/menu-icon.svg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;