import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPosition,
  setEmail,
  setName,
  setPhoneNo,
} from "../../../store/actions/intro";
import styles from "../ResumeEditor.module.css";
import Form from "react-bootstrap/Form";

export default function IntroEdit() {
  const introData = useSelector((state) => state.Intro);

  const dispatch = useDispatch();
  const onNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const onChangePosition = (e) => {
    dispatch(setCurrentPosition(e.target.value));
  };

  const onChangePhone = (e) => {
    dispatch(setPhoneNo(e.target.value));
  };

  const onChangeEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };

  return (
    <>
      <Form className={styles.introBlock}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Your name"
            value={introData.name}
            onChange={onNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="position">
          <Form.Label>Current Position</Form.Label>
          <Form.Control
            type="name"
            placeholder="Current Position"
            value={introData.current_position}
            onChange={onChangePosition}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone"
            value={introData.phone}
            onChange={onChangePhone}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={introData.email}
            onChange={onChangeEmail}
          />
        </Form.Group>
      </Form>
    </>
  );
}
