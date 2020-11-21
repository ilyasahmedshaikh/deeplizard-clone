import React from 'react';
import '../assets/css/home.css';

import Particles from 'react-particles-js'; 

import calculus from '../assets/img/calculus-curve-tangent-line.png'
import Keras from '../assets/img/keras-logo-with-text.png';
import robot from '../assets/img/robot.png';
import pytorch from '../assets/img/pytorch-logo-dark.svg';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Home");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <section className="slider">
                    <div className="content">
                        <h4>Building Collective Intelligence</h4>
                        <h1>DEEPLIZARD</h1>
                        <a className="btn-c outlined">Deep Learning Courses & Offerings</a>
                    </div>

                    <Particles
                        params={{ 
                            particles: { 
                                number: { 
                                    value: 200, 
                                    density: { 
                                        enable: true, 
                                        value_area: 1000, 
                                    },
                                },
                                color: {
                                    value: "#cccccc"
                                },
                                line_linked: {
                                  color: '#cccccc',
                                  opacity: 1
                                }
                            }, 
                        }} 
                    /> 
                </section>

                <section className="after-slider">
                    <div className="container">
                        <h2 className="text-light top-message">
                            Contribute to <span className="special-text text-uppercase">Collective Intelligence</span>.
                            <br/>Start your <span className="special-text text-uppercase">Deep Learning</span> Journey Today.
                        </h2>
                    </div>
                </section>

                <section className="courses">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-3">
                                <div className="course">
                                    <h4>Course</h4>
                                    <h1>1</h1>
                                    <p>Machine Learning & Deep Learning Fundamentals</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="course">
                                    <h4>Course</h4>
                                    <h1>2</h1>
                                    <p>Keras - Python Deep Learning Neural Network API</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="course">
                                    <h4>Course</h4>
                                    <h1>3</h1>
                                    <p>Neural Network Programming - Deep Learning with PyTorch</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="course">
                                    <h4>Course</h4>
                                    <h1>4</h1>
                                    <p>Reinforcement Learning - Goal Oriented Intelligence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="welcome-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-7">
                                <p>
                                    Welcome to <span className="special-text">deeplizard's deep learning road map! </span> 
                                    Check out the overviews below for all of the deep learning material, and choose a 
                                    <span className="special-text"> starting point!</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="deeplearning-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-7 offset-sm-5 text-right pt-1">
                                <h2 className="text-light">
                                    Deep <span className="special-text">Learning</span>.
                                </h2>

                                <p className="lead text-light font-italic">
                                    A sub-field of machine learning that uses algorithms inspired by the structure and function of the brain's neural networks to learn features from data.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="multiple-courses">
                    <div className="item">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-lg-6 text-center">
                                    <a href="#">
                                        <img className="img-fluid mx-auto scalable" src={calculus} alt="course thumbnail" />
                                    </a>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <h2 className="scalable">Machine Learning &amp; Deep Learning Fundamentals</h2>
                                    <p className="lead">This course covers concepts that are absolutely fundamental to deep learning and artificial neural networks for beginners! You will also learn how to implement some of the concepts in simple code examples.
                                    </p>
                                    <p className="info">
                                        Level: Beginner
                                    </p>
                                    <p className="lead">
                                        This is a great course for beginners in deep learning, or non-beginners who need a refresher on fundamental concepts.
                                    </p>
                                    <a className="btn-c outlined" href="#" role="button">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-lg-6 order-lg-2 text-center">
                                    <a href="#">
                                        <img className="img-fluid mx-auto scalable" src={Keras} alt="course thumbnail" />
                                    </a>
                                </div>
                                <div className="col-12 col-lg-6 order-lg-1">
                                    <h2 className="scalable">Keras - Python Deep Learning Neural Network API</h2>
                                    <p className="lead">
                                        This course teaches you how to use Keras, a neural network API written in Python, to implement fundamental deep learning concepts in code and to deploy models to production.
                                    </p>
                                    <p className="info">
                                        Level: Beginner
                                    </p>
                                    <p className="lead">
                                        This course is for anyone interested in developing neural network projects in code. Some fundamental deep learning concepts from the Deep Learning Fundamentals course, as well as basic coding skills are assumed to be known.
                                    </p>
                                    <a className="btn-c outlined" href="#" role="button">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-lg-6 text-center">
                                    <a href="#">
                                        <img className="img-fluid mx-auto scalable" src={pytorch} alt="course thumbnail" />
                                    </a>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <h2 className="scalable">Neural Network Programming - Deep Learning with PyTorch</h2>
                                    <p className="lead">
                                        This course teaches you how to implement neural networks using the PyTorch API and is a step up in sophistication from the Keras course. PyTorch inherently gives the developer more control than Keras, and as such, you will learn how to build, train, and
                                        generally work with neural networks and tensors at deeper level!
                                    </p>
                                    <p className="info">
                                        Level: Intermediate
                                    </p>
                                    <p className="lead">
                                        This course is for anyone interested in developing neural network projects in code. Some fundamental deep learning concepts from the Deep Learning Fundamentals course, as well as basic coding skills are assumed to be known. This course also uses more
                                        advanced coding practices than the Keras course.
                                    </p>
                                    <a className="btn-c outlined" href="#" role="button">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-lg-6 order-lg-2 text-center">
                                    <a href="#">
                                        <img className="img-fluid mx-auto scalable" src={robot} alt="course thumbnail" />
                                    </a>
                                </div>
                                <div className="col-12 col-lg-6 order-lg-1">
                                    <h2 className="scalable">Reinforcement Learning - Goal Oriented Intelligence</h2>
                                    <p className="lead">
                                        This course will give you a deep understanding of the intuition, the math, and the coding involved with the buzzing area of machine learning called reinforcement learning! Reinforcement learning algorithms study the behavior of subjects in environments
                                        and learn to optimize that behavior.
                                    </p>
                                    <p className="info">
                                        Level: Advanced
                                    </p>
                                    <p className="lead">
                                        This course is for anyone interested in learning about reinforcement learning. Some fundamental deep learning concepts from the Deep Learning Fundamentals course, as well as basic coding skills are assumed to be known. PyTorch is used in this course.
                                    </p>
                                    <a className="btn-c outlined" href="#" role="button">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}
export default Home;