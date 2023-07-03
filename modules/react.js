import { Component } from "./component.js";

function generate_element(element, properties, children) {
    const elem = document.createElement(element);
    children.forEach(child => {
      if (typeof child === "object") {
        elem.appendChild(child);
      } else {
        elem.textContent += child;
      }
    });
    if (properties != null) {
      Object.keys(properties).forEach(propertyName => {
        if (/^on.*$/.test(propertyName)) {
            elem.addEventListener(
            propertyName.substring(2).toLowerCase(),
            properties[propertyName]
          );
        } else {
            elem.setAttribute(propertyName, properties[propertyName]);
        }
      });
    }
    return elem;
  }


export const createElement = (element, properties, ...children) => {
  return generate_element(element, properties, children);
};

export const MiniReact = {
  createElement,
  Component
};

export const React = {
  render: (element, domElement, properties = {}) => {
    var prevChild = null;
    var el = new element(properties);
    var prevChild = el.display();

    el.componentDidUpdate = () => {
      var child = el.display();
      domElement.replaceChild(child, prevChild);
      prevChild = child;
    };
    domElement.appendChild(prevChild);
  }
};