import React from "react";
import ExperienceBlock from "../ExperienceBlock";
import Intro from "../Intro";
import ResumeEditor from "../ResumeEditor";
import styles from "./Main.module.css";

export default function Main() {
  const data = [
    {
      key: 1,
      heading: "abc",
      content: `ahjsmdnasdhjdans
       gavshjhmadjsn
       asdhgjnhbmds`,
    },
    {
      key: 2,
      heading: "abc",
      content: "ahjsmdnasdhjdans",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <ResumeEditor />
      <div style={{ width: "50vw" }}>
        <div className={styles.resumeContainer}>
          <Intro />
          <ExperienceBlock heading="Experiance" content={data} />
        </div>
      </div>
    </div>
  );
}
