import React, { Component } from "react";

class Accordion extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper">
        <ul className="accordion-list">
          <li className="accordion-list__item">
            <AccordionItem
              subComponent={this.props.subComponent}
              title={this.props.title}
            />
          </li>
        </ul>
      </div>
    );
  }
}

class AccordionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }

  render() {
    return (
      <div
        className={`accordion-item ${this.state.opened &&
          "accordion-item--opened"}`}
      >
        <div
          className="accordion-item__line"
          onClick={() => {
            this.setState({ opened: !this.state.opened });
          }}
        >
          <div className="accordion-item__title">{this.props.title}</div>
          <span className="accordion-item__icon fas fa-chevron-down" />
        </div>
        <div className="accordion-item__inner">{this.props.subComponent}</div>
      </div>
    );
  }
}

export default Accordion;
