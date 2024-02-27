import React, { useState } from "react";
import { connect } from "react-redux";

import { increment, decrement, reset, changeCountTo } from "./actions/actionTypes";

import "./App.css";

const Count = (props) => {
  const [changeCount, setChangeCount] = useState(0);

  const handleChange = (e) => {
    const { value } = e.target;
    setChangeCount(parseInt(value, 10)); // Correct radix to 10 for decimal
  };

  const handleSubmit = () => {
    props.changeCountTo(changeCount);
    setChangeCount(0);
  };

  return (
    <div>
      <p>Current Count: {props.count}</p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.reset}>Reset</button>
      <br />
      <input
        type="number"
        value={changeCount}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Change Count</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count
});

// Connect the component to Redux store
export default connect(mapStateToProps, {
  increment,
  decrement,
  reset,
  changeCountTo
})(Count);
