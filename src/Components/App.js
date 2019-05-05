import React from 'react';
import unsplash from '../API/unsplash';
import SearchBar from './searchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {
        images: []
    }
    onSearchSubmit = async (term) => {
        const response = await unsplash('search/photos', {
            params: { query: term }
        });
        this.setState({ images: response.data.results });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar submitCallback={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div >
        );
    };
}
export default App;