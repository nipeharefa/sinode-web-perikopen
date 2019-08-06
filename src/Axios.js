import * as React from 'react';
import axios from 'axios';

class Axios extends React.Component {
    constructor(props) {
        super(props);

        // NOTE: Do not use this.context as React uses it internally
        this.axiosContext = React.createContext(this.value);
    }

    axiosRequest() {
        const {
            config
        } = this.props;

        // Reset the request
        this.value = null;
        this.forceUpdate();

        axios.request(config).then(response => {
            this.value = response;
            this.forceUpdate();
        }).catch(error => {
            this.value = error;
            this.forceUpdate();
        });
    }

    componentDidMount() {
        this.axiosRequest();
    }

    render() {
        const {
            children,
        } = this.props;

        const {
            Provider,
            Consumer
        } = this.axiosContext;

        return ( <Provider value = { this.value }>
                    <Consumer >{ children }</Consumer>
                </Provider>
        );
    }
}

export default Axios;