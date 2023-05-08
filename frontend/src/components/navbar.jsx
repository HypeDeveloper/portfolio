import LogoEye from "./logo";
import '../style/components/navbar.css'
import '../style/main.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [navOpen, setNavOpen] = useState(false)

    function handleNavList() {
        setNavOpen(!navOpen)
    }

    return (
        <>
            <nav>
                <div className="navgroup">
                    <div className="logoSection">
                        <Link to='/'>
                            <LogoEye zoom='45%' action='none' />
                        </Link>
                    </div>

                    <div className="hamSection" onClick={handleNavList}>
                        <div className="hamIcon">
                            <div className="lineHam"></div>
                            <div className="lineHam"></div>
                        </div>
                    </div>
                </div>
            </nav>


            <div className="navList" style={{
                display: navOpen ? 'block' : 'none'
            }}>
                <div className="navListWrap">
                    <Link to='/' onClick={handleNavList}>
                        <div className="boxedNav">
                            <h2>Home</h2>
                            <div className="lineNav">
                                <div className="lineNs"></div>
                                <div className="lineNs"></div>
                                <div className="lineNs"></div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/about' onClick={handleNavList}>
                        <div className="boxedNav">
                            <h2>About</h2>
                            <div className="lineNav">
                                <div className="lineNs"></div>
                                <div className="lineNs"></div>
                                <div className="lineNs"></div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/projects' onClick={handleNavList}>
                        <div className="boxedNav">
                            <h2>Projects</h2>
                            <div className="lineNav">
                                <div className="lineNs"></div>
                                <div className="lineNs"></div>
                                <div className="lineNs"></div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/contact' onClick={handleNavList}>
                        <div className="boxedNav">
                            <h2>Contacts</h2>
                            <div className="lineNav">
                                <div className="lineNs"></div>
                                <div className="lineNs"></div>
                                <div className="lineNs"></div>
                            </div>
                        </div>                    </Link>

                </div>

                <div className="bottomNavList">
                    <div className="socialBox">
                        <div className="boxSocial"></div>
                    </div>
                    <div className="socialBox">
                        <div className="boxSocial"></div>
                    </div>
                    <div className="socialBox">
                        <div className="boxSocial"></div>
                    </div>
                </div>
            </div>
        </>
    )
}