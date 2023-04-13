import React, { createRef } from "react";
import { useSelector } from "react-redux";
import ExperienceBlock from "../ExperienceBlock";
import Intro from "../Intro";
import ResumeEditor from "../ResumeEditor";
import styles from "./Main.module.css";
import Pdf from "react-to-pdf";

export default function Main() {
  const { educations = [] } = useSelector((state) => state.Education);

  const ref = createRef();
  // console.log("###", educations);
  return (
    <div className={styles.mainContainer}>
      <ResumeEditor />
      <div className={styles.resume} ref={ref}>
        <div className={styles.resumeContainer}>
          <Pdf
            targetRef={ref}
            filename="code-example.pdf"
            scale={1}
            x={10}
            y={0}
          >
            {({ toPdf }) => (
              <button onClick={toPdf} className="btn btn-success">
                Generate Pdf
              </button>
            )}
          </Pdf>
          <Intro />
          <ExperienceBlock heading="Experiance" content={educations} />
        </div>
      </div>
    </div>
  );
}
