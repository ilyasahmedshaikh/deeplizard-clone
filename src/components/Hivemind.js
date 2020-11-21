import React from 'react';
import '../assets/css/hivemind.css';

class Hivemind extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Hivemind");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <p>Hivemind</p>
            </div>
        );
    }
}
export default Hivemind;