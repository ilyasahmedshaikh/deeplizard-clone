import React from 'react';
import '../assets/css/code.css';

class Code extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Code");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <p>Code</p>
            </div>
        );
    }
}
export default Code;