import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/code.css';

import Ad from '../assets/img/ad.png';

class Code extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
            collapse: '',
            childCollapse: ''
        };
    } 

    componentDidMount() {
        console.log("Code");

        this.setState({
            loading: true
        });
    }

    setCollapse = (collapse) => {
        if (collapse != this.state.collapse) {
            this.setState({ collapse: collapse });
        } else {
            this.setState({ collapse: '' });
        }
    }

    setChildCollapse = (childCollapse) => {
        if (childCollapse != this.state.childCollapse) {
            this.setState({ childCollapse: childCollapse });
        } else {
            this.setState({ childCollapse: '' });
        }
    }

    render() {
        return(
            <div className="code-section pt-5">
                <div className="container">
                    <h1>DEEPLIZARD Resources</h1>
                    <p>Download access to resources is available for 
                        <Link className="text-danger" to={process.env.PUBLIC_URL + '/hivemind'}> Hivemind</Link> members
                    </p>
                    <img src={Ad} />

                    <div className="resources pt-5">
                        <h2><strong>Resources by Course</strong></h2>
                        <p>All deeplizard resources are tested and updated to support newer dependency versions, as well as improved with bug fixes. Resources are made available in versioned releases, so you can stay up to date when changes are applied.</p>

                        <ul className="list-unstyled">
                            <li><i class="fas fa-check pr-2"></i> TESTED</li>
                            <li><i class="fas fa-check pr-2"></i> MAINTAINED</li>
                            <li><i class="fas fa-check pr-2"></i> CURRENT</li>
                        </ul>

                        <p>Select your course below to see the resources contained in the latest release.</p>

                        <div className="collapsible-section pt-4 pb-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="collapse-item" onClick={() => this.setCollapse('ML') }>
                                        <h3>Machine Learning & Deep Learning Fundamentals 
                                            {
                                                this.state.collapse == 'ML' ?
                                                <i class="fas fa-chevron-down float-right"></i>
                                                :
                                                <i class="fas fa-chevron-left float-right"></i>
                                            }
                                        </h3>
                                    </div>
                                    <div className={this.state.collapse == 'ML' ? "d-block" : "d-none"}>
                                        <div class="card border-0">
                                            <div className="row">
                                                <div className="col-12 col-md-2">
                                                    <a className="badge badge-dark">Latest Release</a>
                                                    <div className="pt-2"><i class="fas fa-code-branch"></i> <span className="text-danger text-right">dfebcf1</span></div>
                                                    <div className="pt-1"><i class="fas fa-tag"></i> v1.0.0</div>
                                                </div>
                                                <div className="col-12 col-md-10 pt-2">
                                                    <h4><strong>Deep Learning Fundamentals v1.0.0</strong></h4>
                                                    <h4>Files</h4>
                                                    <p>Files included in this release:</p>
                                                    <div class="table-responsive">
                                                        <table class="file-table table table-sm table-hover">
                                                            <caption>Download zipped files
                                                                <a href="https://www.patreon.com/posts/code-for-deep-19266563" target="_blank"> <span className="text-danger">here</span></a>.
                                                            </caption>
                                                            <thead>
                                                                <tr>
                                                                    <th class="d-none d-md-table-cell">#</th>
                                                                    <th>Name</th>
                                                                    <th>Size</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>1</code></td>
                                                                    <td><code>Backpropagation-notebook-deeplizard.pdf </code></td>
                                                                    <td><code>302.9 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>2</code></td>
                                                                    <td><code>Backpropagation-notebook-deeplizard.tex </code></td>
                                                                    <td><code>18.3 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>3</code></td>
                                                                    <td><code>deep-learning-fundamentals-deeplizard.ipynb <span class="file-status badge badge-pill badge-light">passing</span></code></td>
                                                                    <td><code>145.6 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>4</code></td>
                                                                    <td><code>versions.ipynb <span class="file-status badge badge-pill badge-light">passing</span></code></td>
                                                                    <td><code>1.9 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>5</code></td>
                                                                    <td><code>MNIST 7 Convolution.xlsx </code></td>
                                                                    <td><code>35.7 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>6</code></td>
                                                                    <td><code>NN.PNG </code></td>
                                                                    <td><code>30.8 KB</code></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                
                                                    <h4>Dependencies</h4>
                                                    <p>Dependencies used in this release:</p>
                                                    <div class="table-responsive">
                                                        <table class="dependency-table table table-sm table-bordered table-hover">
                                                            <caption>Code files were tested using these versions.</caption>
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Version</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr>
                                                                    <td><code>python</code></td>
                                                                    <td><code>3.6.10</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>tensorflow</code></td>
                                                                    <td><code>2.1.0</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>keras</code></td>
                                                                    <td><code>2.3.1</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>numpy</code></td>
                                                                    <td><code>1.18.1</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>sklearn</code></td>
                                                                    <td><code>0.22.2.post1</code></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <h4>Changes</h4>
                                                    <p>Changes included in this release:</p>
                                                    <div className="changes">
                                                        <div className="change">
                                                            <div className="pt-2"><i class="fas fa-code-branch"></i> <span className="text-danger text-right">dfebcf1</span></div>
                                                            <p className="pl-3 mb-0">Change calls to learning rate from <span className="text-danger">optimizer.lr</span> to <span className="text-danger">optimizer.learning_rate</span> <a onClick={() => this.setChildCollapse('dfebcf1') }><i class="fas fa-ellipsis-h"></i></a></p>
                                                            <div className={this.state.childCollapse == 'dfebcf1' ? "bg-light p-3 m-3 d-block" : "bg-light p-3 m-3 d-none"}>
                                                                <p className="mb-0">
                                                                    <span className="text-danger">lr</span> is included for backward compatibility, recommended to use <span className="text-danger">learning_rate</span> instead. <span className="text-danger">https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Adam</span>
                                                                </p>
                                                            </div>
                                                            <p className="pl-3"><small className="text-muted">Committed by Mandy on March 28, 2020</small></p>
                                                        </div>
                                                        <div className="change">
                                                            <div className="pt-2"><i class="fas fa-code-branch"></i> <span className="text-danger text-right">d29b099</span></div>
                                                            <p className="pl-3 mb-0">Create course <a onClick={() => this.setChildCollapse('d29b099') }><i class="fas fa-ellipsis-h"></i></a></p>
                                                            <div className={this.state.childCollapse == 'd29b099' ? "bg-light p-3 m-3 d-block" : "bg-light p-3 m-3 d-none"}>
                                                                <p className="mb-0"><strong>Course Name:</strong></p>
                                                                <p>Machine Learning & Deep Learning Fundamentals</p>

                                                                <p className="mb-0"><strong>Description:</strong></p>
                                                                <p>This series explains concepts that are fundamental to deep learning and artificial neural networks for beginners. In addition to covering these concepts, we also show how to implement some of the concepts in code using Keras, a neural network API written in Python. We will learn about layers in an artificial neural network, activation functions, backpropagation, convolutional neural networks (CNNs), data augmentation, transfer learning and much more!</p>
                                                            </div>
                                                            <p className="pl-3"><small className="text-muted">Committed by Mandy on November 22, 2017</small></p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="collapse-item" onClick={() => this.setCollapse('Keras') }>
                                        <h3>Keras - Python Deep Learning Neural Network API 
                                            {
                                                this.state.collapse == 'Keras'  ?
                                                <i class="fas fa-chevron-down float-right"></i>
                                                :
                                                <i class="fas fa-chevron-left float-right"></i>
                                            }
                                        </h3>
                                    </div>
                                    <div className={this.state.collapse == 'Keras' ? "d-block" : "d-none"}>
                                        <div class="card border-0">
                                            <div className="row">
                                                <div className="col-12 col-md-2">
                                                    <a className="badge badge-dark">Latest Release</a>
                                                    <div className="pt-2"><i class="fas fa-code-branch"></i> <span className="text-danger text-right">d65e982</span></div>
                                                    <div className="pt-1"><i class="fas fa-tag"></i> v1.0.2</div>
                                                </div>
                                                <div className="col-12 col-md-10 pt-2">
                                                    <h4><strong>Deep Learning with Keras v1.0.2</strong></h4>
                                                    <h4>Files</h4>
                                                    <p>Files included in this release:</p>
                                                    <table class="file-table table table-sm table-hover">
                                                        <caption>Download zipped files
                                                            <a href="https://www.patreon.com/posts/code-for-keras-1-19266488" target="_blank">here</a>.
                                                        </caption>
                                                        <thead>
                                                            <tr>
                                                                <th class="d-none d-md-table-cell">#</th>
                                                                <th>Name</th>
                                                                <th>Size</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>1</code></td>
                                                                <td><code>Part-1-tf.keras-deeplizard.ipynb <span class="file-status badge badge-pill badge-light">passing</span></code></td>
                                                                <td><code>4.6 MB</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>2</code></td>
                                                                <td><code>versions.ipynb <span class="file-status badge badge-pill badge-light">passing</span></code></td>
                                                                <td><code>1.8 KB</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>3</code></td>
                                                                <td><code>hello_app.py </code></td>
                                                                <td><code>330.0 b</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>4</code></td>
                                                                <td><code>predict_app.py </code></td>
                                                                <td><code>1.3 KB</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>5</code></td>
                                                                <td><code>README.txt </code></td>
                                                                <td><code>149.0 b</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>6</code></td>
                                                                <td><code>sample_app.py </code></td>
                                                                <td><code>121.0 b</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>7</code></td>
                                                                <td><code>hello.html </code></td>
                                                                <td><code>783.0 b</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>8</code></td>
                                                                <td><code>predict-with-visuals.html </code></td>
                                                                <td><code>2.8 KB</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>9</code></td>
                                                                <td><code>predict.html </code></td>
                                                                <td><code>1.6 KB</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>10</code></td>
                                                                <td><code>medical_trial_model.h5 </code></td>
                                                                <td><code>31.8 KB</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>11</code></td>
                                                                <td><code>my_model_weights.h5 </code></td>
                                                                <td><code>17.5 KB</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>12</code></td>
                                                                <td><code>Observable-notebook.txt </code></td>
                                                                <td><code>139.0 b</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>13</code></td>
                                                                <td><code>package-lock.json </code></td>
                                                                <td><code>13.5 KB</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>14</code></td>
                                                                <td><code>package.json </code></td>
                                                                <td><code>107.0 b</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>15</code></td>
                                                                <td><code>server.js </code></td>
                                                                <td><code>304.0 b</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>16</code></td>
                                                                <td><code>imagenet_classes.js </code></td>
                                                                <td><code>32.8 KB</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>17</code></td>
                                                                <td><code>predict-with-tfjs.html </code></td>
                                                                <td><code>2.1 KB</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="d-none d-md-table-cell"><code>18</code></td>
                                                                <td><code>predict.js </code></td>
                                                                <td><code>2.1 KB</code></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                
                                                    <h4>Dependencies</h4>
                                                    <p>Dependencies used in this release:</p>
                                                    <div class="table-responsive">
                                                        <table class="dependency-table table table-sm table-bordered table-hover">
                                                            <caption>Code files were tested using these versions.</caption>
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Version</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr>
                                                                    <td><code>python</code></td>
                                                                    <td><code>3.6.10</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>tensorflow</code></td>
                                                                    <td><code>2.2.0</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>numpy</code></td>
                                                                    <td><code>1.18.1</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>sklearn</code></td>
                                                                    <td><code>0.22.2.post1</code></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <h4>Changes</h4>
                                                    <p>Changes included in this release:</p>
                                                    <div className="changes">
                                                        <div className="change">
                                                            <div className="pt-2"><i class="fas fa-code-branch"></i> <span className="text-danger text-right">dfebcf1</span></div>
                                                            <p className="pl-3 mb-0">Change calls to learning rate from <span className="text-danger">optimizer.lr</span> to <span className="text-danger">optimizer.learning_rate</span> <a onClick={() => this.setChildCollapse('dfebcf1') }><i class="fas fa-ellipsis-h"></i></a></p>
                                                            <div className={this.state.childCollapse == 'dfebcf1' ? "bg-light p-3 m-3 d-block" : "bg-light p-3 m-3 d-none"}>
                                                                <p className="mb-0">
                                                                    <span className="text-danger">lr</span> is included for backward compatibility, recommended to use <span className="text-danger">learning_rate</span> instead. <span className="text-danger">https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Adam</span>
                                                                </p>
                                                            </div>
                                                            <p className="pl-3"><small className="text-muted">Committed by Mandy on March 28, 2020</small></p>
                                                        </div>
                                                        <div className="change">
                                                            <div className="pt-2"><i class="fas fa-code-branch"></i> <span className="text-danger text-right">d29b099</span></div>
                                                            <p className="pl-3 mb-0">Create course <a onClick={() => this.setChildCollapse('d29b099') }><i class="fas fa-ellipsis-h"></i></a></p>
                                                            <div className={this.state.childCollapse == 'd29b099' ? "bg-light p-3 m-3 d-block" : "bg-light p-3 m-3 d-none"}>
                                                                <p className="mb-0"><strong>Course Name:</strong></p>
                                                                <p>Machine Learning & Deep Learning Fundamentals</p>

                                                                <p className="mb-0"><strong>Description:</strong></p>
                                                                <p>This series explains concepts that are fundamental to deep learning and artificial neural networks for beginners. In addition to covering these concepts, we also show how to implement some of the concepts in code using Keras, a neural network API written in Python. We will learn about layers in an artificial neural network, activation functions, backpropagation, convolutional neural networks (CNNs), data augmentation, transfer learning and much more!</p>
                                                            </div>
                                                            <p className="pl-3"><small className="text-muted">Committed by Mandy on November 22, 2017</small></p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="collapse-item" onClick={() => this.setCollapse('NN') }>
                                        <h3>Neural Network Programming - Deep Learning With PyTorch
                                            {
                                                this.state.collapse == 'NN' ?
                                                <i class="fas fa-chevron-down float-right"></i>
                                                :
                                                <i class="fas fa-chevron-left float-right"></i>
                                            }
                                        </h3>
                                    </div>
                                    <div className={this.state.collapse == 'NN' ? "d-block" : "d-none"}>
                                        <div class="card border-0">
                                            <div className="row">
                                                <div className="col-12 col-md-2 pt-2">
                                                    <a className="badge badge-dark">Latest Release</a>
                                                    <div className="pt-2"><i class="fas fa-code-branch"></i> <span className="text-danger text-right">dfebcf1</span></div>
                                                    <div className="pt-1"><i class="fas fa-tag"></i> v1.0.0</div>
                                                </div>
                                                <div className="col-12 col-md-10">
                                                    <h4><strong>Neural Network Programming - Deep Learning With PyTorch v1.0.0</strong></h4>
                                                    <h4>Files</h4>
                                                    <p>Files included in this release:</p>
                                                    <div class="table-responsive">
                                                        <table class="file-table table table-sm table-hover">
                                                            <caption>Download zipped files
                                                                <a href="https://www.patreon.com/posts/code-for-deep-19266563" target="_blank"> <span className="text-danger">here</span></a>.
                                                            </caption>
                                                            <thead>
                                                                <tr>
                                                                    <th class="d-none d-md-table-cell">#</th>
                                                                    <th>Name</th>
                                                                    <th>Size</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>1</code></td>
                                                                    <td><code>Backpropagation-notebook-deeplizard.pdf </code></td>
                                                                    <td><code>302.9 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>2</code></td>
                                                                    <td><code>Backpropagation-notebook-deeplizard.tex </code></td>
                                                                    <td><code>18.3 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>3</code></td>
                                                                    <td><code>deep-learning-fundamentals-deeplizard.ipynb <span class="file-status badge badge-pill badge-light">passing</span></code></td>
                                                                    <td><code>145.6 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>4</code></td>
                                                                    <td><code>versions.ipynb <span class="file-status badge badge-pill badge-light">passing</span></code></td>
                                                                    <td><code>1.9 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>5</code></td>
                                                                    <td><code>MNIST 7 Convolution.xlsx </code></td>
                                                                    <td><code>35.7 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>6</code></td>
                                                                    <td><code>NN.PNG </code></td>
                                                                    <td><code>30.8 KB</code></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                
                                                    <h4>Dependencies</h4>
                                                    <p>Dependencies used in this release:</p>
                                                    <div class="table-responsive">
                                                        <table class="dependency-table table table-sm table-bordered table-hover">
                                                            <caption>Code files were tested using these versions.</caption>
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Version</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr>
                                                                    <td><code>python</code></td>
                                                                    <td><code>3.6.10</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>tensorflow</code></td>
                                                                    <td><code>2.1.0</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>keras</code></td>
                                                                    <td><code>2.3.1</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>numpy</code></td>
                                                                    <td><code>1.18.1</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>sklearn</code></td>
                                                                    <td><code>0.22.2.post1</code></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <h4>Changes</h4>
                                                    <p>Changes included in this release:</p>
                                                    <div className="changes">
                                                        <div className="change">
                                                            <div className="pt-2"><i class="fas fa-code-branch"></i> <span className="text-danger text-right">dfebcf1</span></div>
                                                            <p className="pl-3 mb-0">Change calls to learning rate from <span className="text-danger">optimizer.lr</span> to <span className="text-danger">optimizer.learning_rate</span> <a onClick={() => this.setChildCollapse('dfebcf1') }><i class="fas fa-ellipsis-h"></i></a></p>
                                                            <div className={this.state.childCollapse == 'dfebcf1' ? "bg-light p-3 m-3 d-block" : "bg-light p-3 m-3 d-none"}>
                                                                <p className="mb-0">
                                                                    <span className="text-danger">lr</span> is included for backward compatibility, recommended to use <span className="text-danger">learning_rate</span> instead. <span className="text-danger">https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Adam</span>
                                                                </p>
                                                            </div>
                                                            <p className="pl-3"><small className="text-muted">Committed by Mandy on March 28, 2020</small></p>
                                                        </div>
                                                        <div className="change">
                                                            <div className="pt-2"><i class="fas fa-code-branch"></i> <span className="text-danger text-right">d29b099</span></div>
                                                            <p className="pl-3 mb-0">Create course <a onClick={() => this.setChildCollapse('d29b099') }><i class="fas fa-ellipsis-h"></i></a></p>
                                                            <div className={this.state.childCollapse == 'd29b099' ? "bg-light p-3 m-3 d-block" : "bg-light p-3 m-3 d-none"}>
                                                                <p className="mb-0"><strong>Course Name:</strong></p>
                                                                <p>Machine Learning & Deep Learning Fundamentals</p>

                                                                <p className="mb-0"><strong>Description:</strong></p>
                                                                <p>This series explains concepts that are fundamental to deep learning and artificial neural networks for beginners. In addition to covering these concepts, we also show how to implement some of the concepts in code using Keras, a neural network API written in Python. We will learn about layers in an artificial neural network, activation functions, backpropagation, convolutional neural networks (CNNs), data augmentation, transfer learning and much more!</p>
                                                            </div>
                                                            <p className="pl-3"><small className="text-muted">Committed by Mandy on November 22, 2017</small></p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="collapse-item" onClick={() => this.setCollapse('RL') }>
                                        <h3>Reinforcement Learning - Goal Oriented Intelligence
                                            {
                                                this.state.collapse == 'RL' ?
                                                <i class="fas fa-chevron-down float-right"></i>
                                                :
                                                <i class="fas fa-chevron-left float-right"></i>
                                            }
                                        </h3>
                                    </div>
                                    <div className={this.state.collapse == 'RL' ? "d-block" : "d-none"}>
                                        <div class="card border-0">
                                            <div className="row">
                                                <div className="col-12 col-md-2 pt-2">
                                                    <a className="badge badge-dark">Latest Release</a>
                                                    <div className="pt-2"><i class="fas fa-code-branch"></i> <span className="text-danger text-right">dfebcf1</span></div>
                                                    <div className="pt-1"><i class="fas fa-tag"></i> v1.0.0</div>
                                                </div>
                                                <div className="col-12 col-md-10">
                                                    <h4><strong>Reinforcement Learning - Goal Oriented Intelligence v1.0.0</strong></h4>
                                                    <h4>Files</h4>
                                                    <p>Files included in this release:</p>
                                                    <div class="table-responsive">
                                                        <table class="file-table table table-sm table-hover">
                                                            <caption>Download zipped files
                                                                <a href="https://www.patreon.com/posts/code-for-deep-19266563" target="_blank"> <span className="text-danger">here</span></a>.
                                                            </caption>
                                                            <thead>
                                                                <tr>
                                                                    <th class="d-none d-md-table-cell">#</th>
                                                                    <th>Name</th>
                                                                    <th>Size</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>1</code></td>
                                                                    <td><code>Backpropagation-notebook-deeplizard.pdf </code></td>
                                                                    <td><code>302.9 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>2</code></td>
                                                                    <td><code>Backpropagation-notebook-deeplizard.tex </code></td>
                                                                    <td><code>18.3 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>3</code></td>
                                                                    <td><code>deep-learning-fundamentals-deeplizard.ipynb <span class="file-status badge badge-pill badge-light">passing</span></code></td>
                                                                    <td><code>145.6 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>4</code></td>
                                                                    <td><code>versions.ipynb <span class="file-status badge badge-pill badge-light">passing</span></code></td>
                                                                    <td><code>1.9 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>5</code></td>
                                                                    <td><code>MNIST 7 Convolution.xlsx </code></td>
                                                                    <td><code>35.7 KB</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="d-none d-md-table-cell"><code>6</code></td>
                                                                    <td><code>NN.PNG </code></td>
                                                                    <td><code>30.8 KB</code></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                
                                                    <h4>Dependencies</h4>
                                                    <p>Dependencies used in this release:</p>
                                                    <div class="table-responsive">
                                                        <table class="dependency-table table table-sm table-bordered table-hover">
                                                            <caption>Code files were tested using these versions.</caption>
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Version</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr>
                                                                    <td><code>python</code></td>
                                                                    <td><code>3.6.10</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>tensorflow</code></td>
                                                                    <td><code>2.1.0</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>keras</code></td>
                                                                    <td><code>2.3.1</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>numpy</code></td>
                                                                    <td><code>1.18.1</code></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><code>sklearn</code></td>
                                                                    <td><code>0.22.2.post1</code></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <h4>Changes</h4>
                                                    <p>Changes included in this release:</p>
                                                    <div className="changes">
                                                        <div className="change">
                                                            <div className="pt-2"><i class="fas fa-code-branch"></i> <span className="text-danger text-right">dfebcf1</span></div>
                                                            <p className="pl-3 mb-0">Change calls to learning rate from <span className="text-danger">optimizer.lr</span> to <span className="text-danger">optimizer.learning_rate</span> <a onClick={() => this.setChildCollapse('dfebcf1') }><i class="fas fa-ellipsis-h"></i></a></p>
                                                            <div className={this.state.childCollapse == 'dfebcf1' ? "bg-light p-3 m-3 d-block" : "bg-light p-3 m-3 d-none"}>
                                                                <p className="mb-0">
                                                                    <span className="text-danger">lr</span> is included for backward compatibility, recommended to use <span className="text-danger">learning_rate</span> instead. <span className="text-danger">https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Adam</span>
                                                                </p>
                                                            </div>
                                                            <p className="pl-3"><small className="text-muted">Committed by Mandy on March 28, 2020</small></p>
                                                        </div>
                                                        <div className="change">
                                                            <div className="pt-2"><i class="fas fa-code-branch"></i> <span className="text-danger text-right">d29b099</span></div>
                                                            <p className="pl-3 mb-0">Create course <a onClick={() => this.setChildCollapse('d29b099') }><i class="fas fa-ellipsis-h"></i></a></p>
                                                            <div className={this.state.childCollapse == 'd29b099' ? "bg-light p-3 m-3 d-block" : "bg-light p-3 m-3 d-none"}>
                                                                <p className="mb-0"><strong>Course Name:</strong></p>
                                                                <p>Machine Learning & Deep Learning Fundamentals</p>

                                                                <p className="mb-0"><strong>Description:</strong></p>
                                                                <p>This series explains concepts that are fundamental to deep learning and artificial neural networks for beginners. In addition to covering these concepts, we also show how to implement some of the concepts in code using Keras, a neural network API written in Python. We will learn about layers in an artificial neural network, activation functions, backpropagation, convolutional neural networks (CNNs), data augmentation, transfer learning and much more!</p>
                                                            </div>
                                                            <p className="pl-3"><small className="text-muted">Committed by Mandy on November 22, 2017</small></p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Code;