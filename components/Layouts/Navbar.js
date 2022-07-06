import React, { Component } from "react";
import Link from "../../utils/ActiveLink";

class Navbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
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
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <div id="navbar" className="navbar-area fixed-top">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    width="176px"
                    height="36px"
                    src="/images/logo-white.png"
                    alt="logo"
                  />
                </a>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
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
                        <strong style={{ fontSize: "16px" }}>Home </strong>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/services">
                      <a className="nav-link">
                        <strong style={{ fontSize: "16px" }}>Services </strong>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/industry">
                      <a className="nav-link">
                        <strong style={{ fontSize: "16px" }}>Industry </strong>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/team">
                      <a className="nav-link">
                        <strong style={{ fontSize: "16px" }}>Team </strong>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/blogs">
                      <a className="nav-link">
                        <strong style={{ fontSize: "16px" }}>Blogs </strong>
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
                      <a className="nav-link">
                        <strong style={{ fontSize: "16px" }}>Apply </strong>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/hire-top-talent">
                      <a className="nav-link">
                        <strong style={{ fontSize: "16px" }}>Hire </strong>
                      </a>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                                        <Link href="/faq">
                                            <a className="nav-link" >
                                                Faq 
                                            </a>
                                        </Link>

                                     
                                    </li> */}

                  <li className="nav-item">
                    <Link href="/contact">
                      <a className="nav-link">
                        <strong style={{ fontSize: "16px" }}>
                          Contact Us{" "}
                        </strong>
                      </a>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link">
                                                Home <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a className="nav-link">Home One</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-2" activeClassName="active">
                                                    <a className="nav-link">Home Two</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-3" activeClassName="active">
                                                    <a className="nav-link">Home Three</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-4" activeClassName="active">
                                                    <a className="nav-link">Home Four</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link href="/index-5" activeClassName="active">
                                                    <a className="nav-link">Home Five</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}
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
