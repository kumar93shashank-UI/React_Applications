import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);

        console.log(this.imageRef);
        console.log(this.imageRef.currentHeight);
    }
    setSpans = () => {
        const clientHeight = this.imageRef.current.clientHeight;
        const spans = Math.ceil(clientHeight / 10);
        this.setState({ spans });

    }
    render() {
        const { urls, description } = this.props.imageCard;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        );
    }
}
export default ImageCard;
