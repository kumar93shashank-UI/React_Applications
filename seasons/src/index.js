import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './Spinner';
import './seasonDisplay.css';

class App extends Component {
    state = { lat: null, errorMessage: '' };
    componentDidMount() {
        console.log('Component is mounted on the screen!');
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err =>
                this.setState({ errorMessage: err.message })
        )
    }
    renderContent=()=>{
        if (!this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    <Spinner message='Please accept the location request'/>
                    
                </div>
            );
        }
        return (
            <div>
                {this.state.lat ? <div><SeasonDisplay lat={this.state.lat} /></div> :
                    <div>{'Error:  '}{this.state.errorMessage}</div>}

            </div>
        );
    }
    componentDidUpdate() {
        console.log('Component is updated---it rerendered!')
    }
    render() {
        return(
            <div className='oustide-border'>
            {this.renderContent()}
            </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));