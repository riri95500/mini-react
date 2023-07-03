import { React } from "./modules/react.js";
import { router, route } from "./routes.js";
import TodoList from "./modules/Todolist.js";
import { Base } from "./modules/Base.js";
import { Weather } from "./modules/Weather.js";
import { Header } from "./modules/Header.js";

React.render(Base, document.getElementById("root"), {});
React.render(Header, document.getElementById("header"), {router});

var main = document.getElementById("main");
switch (route ? route.getId() : null) {
  case "home":
    React.render(TodoList, main, {});
    break;

  case "weather":
    React.render(Weather, main, {city: "London"});
    break;

  default:
    React.render(TodoList, main, {});
    break;
}