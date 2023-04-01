import { Button, Inputbox, Sidemodal } from "@dtsl/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEducation } from "../../../store/actions/education";
import styles from "../educationEdit/EducationEdit.module.css";
const INITIAL_HEIGHT = "4.1875rem";

export default function ExperianceEdit() {
  const { educations = [] } = useSelector((state) => state.Education);

  const dispatch = useDispatch();
  const textAreaRef = useRef();

  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState("");
  const [subheading, setsubheading] = useState("");
  const [points, setPoints] = useState("");

  const handleOnSubmit = (e) => {
    dispatch(
      setEducation([
        ...educations,
        {
          id: educations.length + 1,
          heading: heading,
          subheading: subheading,
          points: points,
        },
      ])
    );
    setShow(false);
    setHeading("");
    setsubheading("");
    setPoints("");
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
          labelText="Heading"
          placeholder="Enter"
          className={styles.inputEducation}
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <Inputbox
          labelText="Subheading"
          placeholder="Enter"
          className={styles.inputEducation}
          value={subheading}
          onChange={(e) => setsubheading(e.target.value)}
        />
        <Inputbox
          ref={textAreaRef}
          labelText="Content"
          multiline
          placeholder="Enter"
          className={styles.inputEducation}
          value={points}
          onChange={(e) => {
            const text = e.target.value;
            const textArea = textAreaRef.current;
            textArea.style.height = INITIAL_HEIGHT;
            let height = (+textArea.scrollHeight + 2) / 16;
            textArea.style.height = height + "rem";
            setPoints(text);
          }}
        />
      </>
    );
  };

  useEffect(() => {
    if (textAreaRef.current) textAreaRef.current.style.height = INITIAL_HEIGHT;
  }, []);

  return (
    <>
      <Button
        label="Add Experiance"
        onClick={() => {
          setShow(!show);
        }}
      />
      <Sidemodal
        show={show}
        title="Experiance"
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
    </>
  );
}
