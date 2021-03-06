import React from 'react';
import {render} from 'react-dom';
// import WebUploader from './Components/WebUploader.jsx';
import WebUploader from './Components/WebUploader.js';
import './base.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: ''};
        this.changeStatus = this.changeStatus.bind(this);
    }
    changeStatus(className, num) {
        if (num !== undefined) {
            this.setPercent(num);
            return setTimeout(() => {
                this.setState({status: className});
            }, 1000);
        }
        this.setState({status: className});
    }
    setPercent(num) {
        let currentPercent = this.state.percent;
        if (num > 100 || num < 0)
            num = Math.floor(Math.abs(num) / 100) * 100;
        this.setState({percent: num});
    }
    render() {
        return (
            <div>
                <WebUploader uploaderConfig={{server: 'http://localhost/test.php/Home/Index/upload', pick: '#pick', auto: true}} styleConfig={{}}/>
            </div>
        );
    }
}
render((<App/>), document.getElementById('app'));
