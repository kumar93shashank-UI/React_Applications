import React, { Component } from 'react';
// import DateTime from '../lib/DateTime';
import moment from 'moment';
class Date_Display extends Component {
    constructor(props) {
        console.log('Constructor Date_Display called');
        super(props);
    }
    componentWillReceiveProps() {
        console.log('will receive props Date_display called');
    }
    componentWillMount() {
        console.log('will Mount Date_display called');
    }
    componentWillUpdate() {
        console.log('will Update Date_display called');
    }
    // shouldComponentUpdate() {
    //     console.log('should Update Date_display called');
    
    // }
    componentDidMount() {
    
        console.log('Did Mount Date_display called');
    }
    componentDidUpdate() {
        console.log('Did Update  Date_display called');
    }
    componentWillUnmount() {
        console.log('Will Unmount Date_display called');
    }
    render() {
        console.log('Render Date_Display called');
        return (
            <div className="ui center aligned header">
                <h4 className="ui purple header">{moment(this.props.date_To_Display).format('HH:mm:ss')}</h4>
                {this.props.isVisible && <h4 className="ui teal header"> {moment(this.props.date_To_Display).format("DD-MMM-YYYY")}</h4>}
            </div>
        )
    }
}
export default Date_Display;