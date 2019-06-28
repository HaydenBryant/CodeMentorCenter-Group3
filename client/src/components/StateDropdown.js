import React, { Component } from "react";

class StateDropdown extends Component {
  render() {
    return (
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
    );
  }
}

export default StateDropdown;
