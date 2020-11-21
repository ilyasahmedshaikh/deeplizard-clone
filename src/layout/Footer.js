import React, { useState } from 'react';
import '../assets/css/footer.css';

function Footer() {

    const [itemToggle, setItemToggle] = useState('');

    const openAccordian = (item) => {
        if (item == itemToggle) {
            setItemToggle('');
        }
        else {
            setItemToggle(item);
        }
    }

    return(
        <div>
            <footer>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-10 float-sm-left text-muted">
                            <ul className="list-inline mb-0 links">
                                <li className="list-inline-item text-uppercase">
                                    ©deeplizard
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="https://youtube.com/deeplizard" target="_blank">YouTube</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="https://youtube.com/deeplizardvlog" target="_blank">Vlog</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="/hivemind">Hivemind</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="/resources">Code</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="/privacy">Privacy</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="/terms">Terms</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 text-left text-sm-right">
                            <a id="back-to-the-top">
                                <i className="fas fa-chevron-up"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;