import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom'
import './fonts/font-awesome.min.css'
import './style.css'

import Home from '../../pages/home'
import About from '../../pages/about/index'
import Skills from '../../pages/skills'
import Portfolio from '../../pages/portfolio'
import Contact from '../../pages/contact'
import Notfound from '../../pages/404'

import lg from '../../assets/logo.png'


const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #181818;
    width: 60px;
    height: 100%;
`

const MenuTop = styled.div`

`

const MenuMiddle = styled.nav`
    background: #181818;
    width: 60px;
    height: 100%;
    position: relative;
    /* top:0; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* z-index: 3; */
    /* min-height: 450px; */
    /* align-items: center; */
    justify-content: center;
    /* border: solid 1px white; */

    .link {
        font-size: 20px;
        color: #a5a5a5;
        margin-bottom: 15px;
        display: block;
        line-height: 51px;
        height: 51px;
        position: relative;
        text-decoration: none;
        font-family: "Open Sans", "Helvetica", Arial, sans-serif; 
        margin-top: 5px;
        text-align: center;        
    }

    .link-link i {
        -webkit-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
    }

    .link:hover i {
        opacity: 0;

    }

    .link.active,
    .link:hover {
            color:#46bcec;
    }
    .link:after {
        content: '';
        font-size: 9px;
        letter-spacing: 1px;
        position: absolute;
        bottom: 0px;
        display: block;
        width: 100%;
        text-align: center;
        opacity: 0;
        -webkit-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
        
    }

    .link, .home:after {
        content: 'HOME';
    }
    .link, .about:after {
        content: 'ABOUT';
    }
    .link, .skills:after {
        content: 'SKILLS';
    }
    .link, .portfolio:after {
        content: 'MY WORK';
    }
    .link, .contact:after {
        content: 'CONTACT';
    } 
    .link:hover:after{
        opacity: 1;
    } 
`

const Social = styled.ul`
    position: relative;
    bottom: 0;
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
    width: 100%;
    padding-bottom: 20px;

    li a {
    padding: 7px 0;
    display: block;
    font-size: 15px;
    line-height: 16px;
    color: #909096;
    }

    li a:hover {
        color:#46bcec;
    }
`

const MenuBottom = styled.div`

`
const routes = [
    {
        path: "/",
        exact: true,
        // sidebar: () => <div>home!</div>, //Route sidebar
        main: () => <Home />
    },
    {
        path: "/about",
        main: () => <About />
    },
    {
        path: "/skills",
        main: () => <Skills />
    },
    {
        path: "/portfolio",
        main: () => <Portfolio />
    },
    {
        path: "/contact",
        main: () => <Contact />
    },
    {
        path: "*",
        main: () => <Notfound />
    }
];

const Logo = styled.img`
    /* border: 5px solid red; */
    width: 100%;
    height: 100%;
    z-index:99999;

`

export default function SideBar() {
    return (
        <Router>
            <Menu>
                <MenuTop>
                    <Logo src={lg} alt='logo'/>
                </MenuTop>

                <MenuMiddle>
                    <NavLink className="link home" exact to="/"><i className="icon-home"></i></NavLink>
                    <NavLink className="link about" to="/about"><i className="icon-prof"></i></NavLink>
                    <NavLink className="link skills" to="/skills"><i className="icon-gear"></i></NavLink>
                    <NavLink className="link portfolio" to="/portfolio"><i className="icon-eye"></i></NavLink>
                    <NavLink className="link contact" to="/contact"><i className="icon-mail"></i></NavLink>
                </MenuMiddle>
                <MenuBottom>
                    <Social>
                        <li><a rel="noreferrer" href="https://www.linkedin.com/in/eltton/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                        <li><a rel="noreferrer" href="https://github.com/eltton/" target="_blank"><i className="fa fa-github"></i></a></li>
                        {/* <li><a rel="noreferrer" href=" " target="_blank"><i className="fa fa-twitter"></i></a></li> */}
                        {/* <li><a rel="noreferrer" href=" " target="_blank"><i className="fa fa-facebook"></i></a></li> */}
                        <li><a rel="noreferrer" href="https://www.instagram.com/eltonfx/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                    </Social>
                </MenuBottom>
            </Menu>
            <Switch>
                {routes.map((route, index) => (
                    // Render more <Route>s with the same paths as
                    // above, but different components this time.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                    />
                ))}
            </Switch>
        </Router>
    )
}