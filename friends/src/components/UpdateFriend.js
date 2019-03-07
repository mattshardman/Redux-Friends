import React from "react";
import { connect } from "react-redux";

import { addFriend } from "../actions";

function AddFriend(props) {
  const name = React.createRef();
  const age = React.createRef();
  const email = React.createRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const nameInput = name.current.value;
    const ageInput = age.current.value;
    const emailInput = email.current.value;

    props.editFriend({
      name: nameInput,
      age: ageInput,
      email: emailInput,
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={name}/>
      <input type="text" ref={age} />
      <input type="text" ref={email} />
      <button type="submit">ADD FRIEND</button>
    </form>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { addFriend }
)(AddFriend);
