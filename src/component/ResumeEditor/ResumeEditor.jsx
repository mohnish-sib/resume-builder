import React from "react";
import EducationEdit from "./educationEdit";
import ExperianceEdit from "./experianceEdit";
import IntroEdit from "./IntroEdit";
import styles from "./ResumeEditor.module.css";

export default function ResumeEditor() {
  return (
    <div className={styles.editorContainer}>
      <IntroEdit />
      <div className={styles.rowExpEdu}>
        <EducationEdit />
        <ExperianceEdit />
      </div>
    </div>
  );
}
