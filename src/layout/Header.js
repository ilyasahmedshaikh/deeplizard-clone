import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/header.css'
import logo from '../../src/assets/img/deeplizard-1.png'

function Header() {

    const [menuToggle, setMenuToggle] = useState(false);

    return(
        <div>
            <div class="top-bar clearfix">
                <div class="container-lg">
                    <div class="float-sm-left">
                        <ul class="list-inline mb-0 links">
                            <li class="list-inline-item">
                                <a href="https://youtube.com/deeplizard" target="_blank">YouTube</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://youtube.com/deeplizardvlog" target="_blank">Vlog</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="/hivemind">Hivemind</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="/resources">Code</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="/create-quiz-question">Create a Quiz Question</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header">
                <div className={"mobile-menu-toggle " + (menuToggle ? 'change' : '')} onClick={() => setMenuToggle(!menuToggle)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div className="desktop-menu container">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className='logo'>
                                <Link to={process.env.PUBLIC_URL + '/home'}>
                                    <img src={logo} />
                                    <span class="pl-2">DEEPLIZARD</span>
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="nav">
                                 <ul>
                                    {/* <li><Link to={process.env.PUBLIC_URL + '/home'}>Home</Link></li> */}
                                    <li><Link>Courses</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/code'}>Code</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/hivemind'}>Hivemind</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/vlog'}>Vlog</Link></li>
                                 </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"mobile-menu sidenav " + (menuToggle ? 'open' : 'close')}>
                    {/* <li><Link to={process.env.PUBLIC_URL + '/home'}>Home</Link></li> */}
                    <li><Link>Courses</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/code'}>Code</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/hivemind'}>Hivemind</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/vlog'}>Vlog</Link></li>
                </div>
            </div>
        </div>
    );
}

export default Header;