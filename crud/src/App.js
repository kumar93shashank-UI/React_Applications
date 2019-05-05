import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modifiedData: [],
      title: 'React CRUD Application',
      index: '',
      act: 0
    }
  }
  componentDidMount() {
    this.refs.name.focus();
  }
  submitButton = (event) => {
    event.preventDefault();
    console.log('Try');
    let modifiedData = this.state.modifiedData;
    let name = this.refs.name.value;
    let address = this.refs.address.value;
    if (this.state.act === 0) {
      let data = {
        name, address
      };
      modifiedData.push(data);
    }
    else {
      let index = this.state.index;
      modifiedData[index].name = name;
      modifiedData[index].address = address;
    }

    this.setState({ modifiedData, act: 0 });
    this.refs.myForm.reset();
    this.refs.name.focus();
  }
  removeButton = (i) => {
    let modifiedData = this.state.modifiedData;
    modifiedData.splice(i, 1);
    this.setState({ modifiedData });
    this.refs.myForm.reset();
    this.refs.name.focus();
  }
  editButton = (i) => {
    let data = this.state.modifiedData[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;
    this.setState({
      act: 1,
      index: i
    });
    this.refs.name.focus();

  }
  render() {
    let modifiedData = this.state.modifiedData;
    return (
      <div className="App">
        <h2 className="ui red header">{this.state.title}</h2>
        <form ref="myForm" className="ui form" style={{ padding: '50px' }}>
          <div className="two fields">
            <div className="field">
              <label>Name</label>
              <input placeholder=" Name" type="text" ref="name" />
            </div>
            <div className="field">
              <label>Address</label>
              <input placeholder="Address" type="text" ref="address" />
            </div>
          </div>
          <button className="ui button" onClick={this.submitButton}>Submit</button>
        </form>

        <div className="ui List">
          {modifiedData.map((data, i) =>
            <li key={i} className="ui bulleted list">
              {data.name},{data.address}
              <button onClick={() => this.editButton(i)} className="ui green button">Edit</button>
              <button onClick={() => this.removeButton(i)} className="ui red button">Remove</button>
            </li>

          )}
        </div>
      </div >
    );
  }
}

export default App;
