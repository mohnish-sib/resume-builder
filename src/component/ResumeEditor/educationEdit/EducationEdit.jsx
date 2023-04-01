import { Button, Inputbox, Sidemodal } from "@dtsl/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEducation } from "../../../store/actions/education";
import styles from "./EducationEdit.module.css";

export default function IntroEdit() {
  const { educations = [] } = useSelector((state) => state.Education);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [grade, setGrade] = useState("");

  const handleOnSubmit = (e) => {
    dispatch(
      setEducation([
        ...educations,
        {
          id: educations.length + 1,
          name: schoolName,
          degree: degree,
          grade: grade,
        },
      ])
    );
    setShow(false);
    setSchoolName("");
    setDegree("");
    setGrade("");
    console.log("primary fired");
  };

  const handleSecondaryChange = (event) => {
    console.log("secondary fired");
    setShow(false);
  };

  const content = () => {
    return (
      <>
        <Inputbox
          labelText="School"
          placeholder="Enter"
          className={styles.inputEducation}
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />
        <Inputbox
          labelText="Degree"
          placeholder="Enter"
          className={styles.inputEducation}
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
        <Inputbox
          labelText="Grade"
          placeholder="Enter"
          className={styles.inputEducation}
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
      </>
    );
  };
  console.log("##", educations);
  return (
    <div className={styles.introBlock}>
      <Button
        label="Add Education"
        onClick={() => {
          setShow(!show);
        }}
      />
      <Sidemodal
        show={show}
        title="Education"
        headerVariant="ongoing"
        onHide={() => {
          setShow(false);
        }}
        content={content}
        // showSideModal, hideSideModal (Use these functions if you want to explicitly handle opening and closing of sidemodal)
        primaryAction={{
          label: "Submit",
          variant: "primary",
          onClick: handleOnSubmit,
          disabled: false,
          // {...Rest of button component props}
        }}
        secondaryAction={{
          label: "Back",
          variant: "tertiary",
          onClick: handleSecondaryChange,
          //   icon: <ArrowLeft />,
          disabled: false,
          // {...Rest of button component props}
        }}
      />
    </div>
  );
}
