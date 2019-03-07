import React from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

import { addFriend } from "../actions";

const Form = styled.form`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 80%;
  background: #fff;
  height: 40px;
  border: 1px #ddd solid;
  outline: none;
  padding: 0 20px;
`;

function AddFriend(props) {
  const name = React.createRef();
  const age = React.createRef();
  const email = React.createRef();
  const image = React.createRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const nameInput = name.current.value;
    const ageInput = age.current.value;
    const emailInput = email.current.value;
    const imageInput = image.current.value;

    props.addFriend({
      name: nameInput,
      age: ageInput,
      email: emailInput,
      image: imageInput,
    });
  }

  if(props.addedFriend) {
    return <Redirect to="/" />;
  }

  return (
    <Form onSubmit={submitHandler}>
      <Input type="text" ref={name} placeholder="Name..." />
      <Input type="text" ref={age}  placeholder="Age..." />
      <Input type="text" ref={email} placeholder="Email..." />
      <Input type="text" ref={image} placeholder="Image url..." />
      <button type="submit">ADD FRIEND</button>
    </Form>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { addFriend }
)(AddFriend);
