import React from "react";
import styles from "./ExperienceBlock.module.css";

export default function ExperienceBlock(props) {
  const { heading, content = [] } = props;

  return (
    <div className={styles.experienceContainer}>
      <h3>{heading} </h3>
      <div>
        {content.map((item) => {
          return (
            <>
              <div className={styles.subheading}>{item?.heading} </div>
              <div
                className={styles.content}
                style={{ whiteSpace: "pre-line" }}
              >
                {item?.content}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
