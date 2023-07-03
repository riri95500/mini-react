import { prop_access } from "./fonctions.js";
import { MiniReact } from "./react.js";
import { Component } from "./component.js";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.routes = prop_access(props.router, "routes");
    this.selectedLink = window.location.pathname;
  }

  render = () => {
    console.log(this.selectedLink);

    var routeHome = this.routes.filter(function(r) {
      return r.getId() === "home";
    })[0];

    var routeWeather = this.routes.filter(function(r) {
      return r.getId() === "weather";
    })[0];

    const result = MiniReact.createElement(
      "header",
      null,
      MiniReact.createElement(
        "nav",
        null,
        MiniReact.createElement(
          "a",
          {
            class: routeHome.getClassName(),
            id: routeHome.getId(),
            href: "." + routeHome.getPath(),
            style:
              this.selectedLink === routeHome.getPath()
                ? "color: red"
                : ""
          },
          routeHome.getName()
        ),
        MiniReact.createElement(
            "a",
            {
              class: routeWeather.getClassName(),
              id: routeWeather.getId(),
              href: "." + routeWeather.getPath(),
              style:
              this.selectedLink === routeWeather.getPath()
                ? "color: red"
                : ""
            },
            routeWeather.getName()
        )
      )
    );

    return result;
  };
}