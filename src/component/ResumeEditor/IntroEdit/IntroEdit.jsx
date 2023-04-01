import { Inputbox } from "@dtsl/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPosition,
  setEmail,
  setName,
  setPhoneNo,
} from "../../../store/actions/intro";
import styles from "../ResumeEditor.module.css";

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
    <div className={styles.introBlock}>
      <Inputbox
        labelText="Your name"
        placeholder="Your name"
        value={introData.name}
        onChange={onNameChange}
      />
      <Inputbox
        labelText="Current Position"
        placeholder="Current Position"
        value={introData.current_position}
        onChange={onChangePosition}
      />
      <Inputbox
        labelText="Phone"
        placeholder="Phone"
        value={introData.phone}
        onChange={onChangePhone}
      />
      <Inputbox
        labelText="Email"
        placeholder="Email"
        value={introData.email}
        onChange={onChangeEmail}
      />
    </div>
  );
}
