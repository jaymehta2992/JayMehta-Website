import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => (
    <section id="sidebar">
        <section id="intro">
            <Link to="/" className="logo">
                <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
            </Link>
            <header>
                <h2>Jay Mehta</h2>
                <p>
                    <a href="mailto:jaymehta@gmail.com">
                        jaymehta@gmail.com
                    </a>
                </p>
            </header>
        </section>

        {/* <section className="blurb">
            <h2>About</h2>
            <p>
                
            </p>
            <ul className="actions">
                <li>
                    {window.location.pathname !== `${BASE_PATH}/services` ? (
                        <Link to="/services" className="button">
                            Learn More
                        </Link>
                    ) : (
                        <Link to="/about" className="button">
                            About Me
                        </Link>
                    )}
                </li>
            </ul>
        </section> */}

    </section>
);

export default Nav;
