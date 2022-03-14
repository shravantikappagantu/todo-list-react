import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      items: [],
    };
    this.changedInput = this.changedInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  changedInput(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  }

  addItem() {
    let items = this.state.items;
    let item = this.state.newItem;
    items.push(item);

    this.setState({ items: items });
  }

  deleteItem(name) {
    this.setState({
      items: this.state.items.filter((el) => el !== name),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="title">To-do List</div>
        <br /> <hr /> <br /> <br />
        <input
          className="input-field"
          type="text"
          placeholder="Add an item..."
          name="newItem"
          onChange={this.changedInput}
        ></input>
        <button className="btn add-btn" onClick={this.addItem}>
          +
        </button>
        <br />
        <br />
        <ul>
          {this.state.items.map((item) => {
            return (
              <li key={item} className="list-item">
                {item}
                <button
                  className="btn delete-btn"
                  onClick={() => {
                    this.deleteItem(item);
                  }}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
