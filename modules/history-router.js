export class Router {
  constructor(name, routes) {
    this.name = name;
    this.routes = routes;
  }

  getName = () => {
    return this.name;
  };

  getRoutes = () => {
    return this.routes;
  };
}

export class Route {
  constructor(name, id, path, className) {
    this.name = name;
    this.id = id;
    this.path = path;
    this.className = className;
  }

  getName = () => {
    return this.name;
  };

  getId = () => {
    return this.id;
  };

  getPath = () => {
    return this.path;
  };

  getClassName = () => {
    return this.className;
  };

  getLinkElement = () => {
    return this.path;
  };
}