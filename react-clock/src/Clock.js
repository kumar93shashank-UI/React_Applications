import React, { Component } from 'react';
import Date_Display from './date_Display';
import Panel from './panel';
class Clock extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor clock called');
        this.state = {
            date: new Date(),
            isVisible: false
        }
    }
    toggleDate = () => {
        this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
    }
    timeShow = () => {
        this.timer = setInterval(() => {
            this.setState(() => ({ date: new Date }));
        }, 1000);
    }
    componentWillReceiveProps() {
        console.log('will receive props Clock called');
    }
    componentWillMount() {
        console.log('will Mount Clock called');
    }
    componentWillUpdate() {
        console.log('will Update Clock called');
    }
    // shouldComponentUpdate() {
    //     console.log('should Update Clock called');
    //     return true;
    // }
    componentDidMount() {
        this.timeShow();
        console.log('Did Mount Clock called');
    }
    componentDidUpdate() {
        console.log('Did Update  Clock called');
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        console.log('render  clock called');
        return (
            <div>
                <Panel toggleDate={this.toggleDate} dateOn={this.isVisible} />
                <Date_Display date_To_Display={this.state.date} isVisible={this.state.isVisible} />
            </div>
        )
    }
}
export default Clock