import React from "react";
import { useSelector } from "react-redux";
import ExperienceBlock from "../ExperienceBlock";
import Intro from "../Intro";
import ResumeEditor from "../ResumeEditor";
import styles from "./Main.module.css";

export default function Main() {
  const { educations = [] } = useSelector((state) => state.Education);

  console.log("###", educations);
  return (
    <div className={styles.mainContainer}>
      <ResumeEditor />
      <div style={{ width: "50vw" }}>
        <div className={styles.resumeContainer}>
          <Intro />
          <ExperienceBlock heading="Experiance" content={educations} />
        </div>
      </div>
    </div>
  );
}
