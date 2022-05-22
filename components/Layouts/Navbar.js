import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area fixed-top">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="container">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img width="176px" height="36px" src="/images/logo-white.png" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link">
                                                Home 
                                            </a>
                                        </Link>

                                        
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/services">
                                            <a className="nav-link">
                                                Services
                                            </a>
                                        </Link>

                                       
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/industry">
                                            <a className="nav-link">
                                                Industry 
                                            </a>
                                        </Link>

                                        
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/community">
                                            <a className="nav-link">
                                                Community
                                            </a>
                                        </Link>

                                    </li>

                                    <li className="nav-item">
                                        <Link href="/blogs">
                                            <a className="nav-link">
                                                Blogs
                                            </a>
                                        </Link>

                                        
                                    </li>

                                    {/* <li className="nav-item">
                                        <Link href="/case-study">
                                            <a className="nav-link">
                                                Case Study 
                                            </a>
                                        </Link>

                                     
                                    </li> */}

                                    <li className="nav-item">
                                        <Link href="/apply">
                                            <a className="nav-link" >
                                                Apply 
                                            </a>
                                        </Link>

                                     
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact">
                                            <a className="nav-link" >
                                                Contact Us 
                                            </a>
                                        </Link>

                                     
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default Navbar;