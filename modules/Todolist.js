import { MiniReact } from "./react.js";
import { Component } from "./component.js";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputValue: "",
    };
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addItem() {
    const { items, inputValue } = this.state;
    if (inputValue.trim() !== "") {
      this.setState({
        items: [...items, inputValue],
        inputValue: "",
      });
    }
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
      items: this.state.items,
    });
  }

  render() {
    const { items, inputValue } = this.state;

    const itemList = items.map((item, index) => {
      return MiniReact.createElement("li", { key: index }, item);
    });

    return MiniReact.createElement(
      "div",
      null,
      MiniReact.createElement("div", { id: "header" }, ""),
      MiniReact.createElement("h1", null, "Todo List"),
      MiniReact.createElement("input", { value: inputValue, onChange: this.handleChange }),
      MiniReact.createElement("button", { onClick: this.addItem }, "Add Item"),
      MiniReact.createElement("ul", null, ...itemList)
    );
  }
}

export default TodoList;
