import { Router, Route } from "./modules/history-router.js";

export var router = new Router("router", [
  new Route("Home", "home", "/", ""),
  new Route("Weather", "weather", "/weather", ""),
]);

export var route = router.routes.filter(function (route) {
  return route.getPath() === window.location.pathname;
})[0];
