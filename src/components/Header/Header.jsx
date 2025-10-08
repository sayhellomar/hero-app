import Container from "../Container/Container";
import { FaGithub } from "react-icons/fa";
import heroLogo from '../../assets/hero-logo.png';
import { Link, NavLink } from "react-router";
import './Header.css';

const Header = () => {
    const navLinks = [
        {name: 'Home', path: '/'},
        {name: 'Apps', path: '/apps'},
        {name: 'Installation', path: '/installation'},
    ]
    return (
        <header className="header-area shadow-sm py-1 border-b border-[#E9E9E9]">
            <Container>
                <div className="header-inner">
                    <div className="navbar">
                        <div className="navbar-start">
                            <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden mr-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {
                                    navLinks.map((navLink, index) => <li key={index}><NavLink className="w-max" to={navLink.path}>{navLink.name}</NavLink></li>)
                                }
                            </ul>
                            </div>
                            <Link to="/">
                                <img src={heroLogo} alt="Hero.io" />
                            </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {
                                    navLinks.map((navLink, index) => <li key={index}><NavLink to={navLink.path}>{navLink.name}</NavLink></li>)
                                }
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <a href="https://github.com/sayhellomar" target="_blank" className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-3 px-4 text-base font-semibold text-white rounded-sm flex items-center gap-[10px]">
                                <span className="text-xl"><FaGithub /></span>
                                Contribute
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;