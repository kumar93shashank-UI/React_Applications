import React, { Component } from 'react';
class Panel extends Component {
    constructor(props) {
        console.log('Constructor Panel called');
        super(props);
    }
    componentWillReceiveProps() {
        console.log('will receive props Panel called');
    }
    componentWillMount() {
        console.log('will Mount Panel called');
    }
    componentWillUpdate() {
        console.log('will Update Panel called');
    }
    // shouldComponentUpdate() {
    //     console.log('should Update Panel called');
     
    // }
    componentDidMount() {
    
        console.log('Did Mount Panel called');
    }
    componentDidUpdate() {
        console.log('Did Update  Panel called');
    }
    componentWillUnmount() {
        console.log('Will Unmount panel called');
    }
    render() {
        console.log('render panel called');
        return (
            <div className="ui ui center aligned header">
                <div className="ui slider checkbox">
                    <input type="checkbox" name="newsletter" onChange={this.props.toggleDate} />
                    <label>Show Date</label>
                </div>
            </div>
        );
    }
}
export default Panel;