import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    }
    onInputChange = (event) => {
        console.log(event.target.value);
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.submitCallback(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                    </div>
                    <input value={this.state.term}
                        type="text"
                        onChange={(event) => this.setState({ term: event.target.value })} />
                </form>
            </div>
        );
    }
}
export default SearchBar;