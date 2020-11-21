import React from 'react';
import '../assets/css/vlog.css';

class Vlog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Vlog");
    }

    render() {
        return(
            <div>
                <section>
                    <p>Vlog</p>
                </section>
            </div>
        );
    }
}
export default Vlog;