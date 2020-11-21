import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/header.css'
import logo from '../../src/assets/img/deeplizard-1.png'

function Header() {

    const [menuToggle, setMenuToggle] = useState(false);
    const [childMenuToggle, setChildMenuToggle] = useState(false);

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
                                 <ul className="parent-nav">
                                    {/* <li><Link to={process.env.PUBLIC_URL + '/home'}>Home</Link></li> */}
                                    <li>
                                        <Link className="bold" onClick={() => setChildMenuToggle(!childMenuToggle)}>
                                            Courses <i class="fas fa-chevron-down pl-2"></i>
                                        </Link>
                                        <ul className={"child-nav " + (childMenuToggle? "open" : "")}>
                                            <li className="head">DEEP LEARNING COURSES</li>
                                            <li>Machine Learning & Deep Learning Fundamentals</li>
                                            <li>Keras - Python Deep Learning Neural Network API</li>
                                            <li>Neural Network Programming - Deep Learning with PyTorch</li>
                                            <li>Reinforcement Learning - Goal Oriented Intelligence</li>
                                            <li className="head">Other Courses</li>
                                            <li>Data Science - Learn to code for beginners</li>
                                            <li>Trading - Advanced Order Types with Coinbase</li>
                                            <li>Waves - Proof of Stake Blockchain Platform and DEX</li>
                                            <li>Zcash - Privacy Based Blockchain Platform</li>
                                            <li>Steemit - Blockchain Powered Social Network</li>
                                            <li>Jaxx - Blockchain Interface and Crypto Wallet</li>
                                            <li>AWS - Amazon Web Services EC2 Management</li>
                                        </ul>
                                    </li>
                                    <li><Link className="bold" to={process.env.PUBLIC_URL + '/code'}>Code</Link></li>
                                    <li><Link className="bold" to={process.env.PUBLIC_URL + '/hivemind'}>Hivemind</Link></li>
                                    <li><Link className="bold" to={process.env.PUBLIC_URL + '/vlog'}>Vlog</Link></li>
                                 </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"mobile-menu sidenav " + (menuToggle ? 'open' : 'close')}>
                    <ul className="parent-nav">
                        {/* <li><Link to={process.env.PUBLIC_URL + '/home'}>Home</Link></li> */}
                        <li><Link to={process.env.PUBLIC_URL + '/home'} onClick={() => setMenuToggle(!menuToggle)}>Home</Link></li>
                        <li>
                            <Link onClick={() => setChildMenuToggle(!childMenuToggle)}>
                                Courses <i class="fas fa-chevron-down pl-2"></i>
                            </Link>
                            <ul className={"child-nav " + (childMenuToggle? "open" : "")}>
                                <li className="head">DEEP LEARNING COURSES</li>
                                <li class="text-truncate">Machine Learning & Deep Learning Fundamentals</li>
                                <li class="text-truncate">Keras - Python Deep Learning Neural Network API</li>
                                <li class="text-truncate">Neural Network Programming - Deep Learning with PyTorch</li>
                                <li class="text-truncate">Reinforcement Learning - Goal Oriented Intelligence</li>
                                <li className="head">Other Courses</li>
                                <li class="text-truncate">Data Science - Learn to code for beginners</li>
                                <li class="text-truncate">Trading - Advanced Order Types with Coinbase</li>
                                <li class="text-truncate">Waves - Proof of Stake Blockchain Platform and DEX</li>
                                <li class="text-truncate">Zcash - Privacy Based Blockchain Platform</li>
                                <li class="text-truncate">Steemit - Blockchain Powered Social Network</li>
                                <li class="text-truncate">Jaxx - Blockchain Interface and Crypto Wallet</li>
                                <li class="text-truncate">AWS - Amazon Web Services EC2 Management</li>
                            </ul>
                        </li>
                        <li><Link to={process.env.PUBLIC_URL + '/code'} onClick={() => setMenuToggle(!menuToggle)}>Code</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + '/hivemind'} onClick={() => setMenuToggle(!menuToggle)}>Hivemind</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + '/vlog'} onClick={() => setMenuToggle(!menuToggle)}>Vlog</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;