import { Inputbox } from "@dtsl/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EducationEdit from "./educationEdit";
import IntroEdit from "./IntroEdit";
import styles from "./ResumeEditor.module.css";

export default function ResumeEditor() {
  return (
    <div className={styles.editorContainer}>
      <IntroEdit />
      <EducationEdit />
    </div>
  );
}
