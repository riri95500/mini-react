import { MiniReact } from "./react.js";
import { Component } from "./Component.js";

export class Base extends Component {
  constructor(properties) {
    super(properties);
  }

  render = () => {
    const result = MiniReact.createElement("div", null,
      MiniReact.createElement("div", {id: "header"}, ""),
      MiniReact.createElement("div", {id: "main"}, "")
    );
    return result;
  };
}