import React from "react";
import styles from "./ExperienceBlock.module.css";

export default function ExperienceBlock(props) {
  const { heading, content = [] } = props;

  return (
    <div className={styles.experienceContainer}>
      <h2>{heading} </h2>
      <div>
        {content.map((item) => {
          return (
            <>
              <h3 className={styles.subheading}>{item?.heading} </h3>
              <p className={styles.subheading}>
                <em>{item?.subheading}</em>
              </p>
              <div
                className={styles.content}
                style={{ wordWrap: "break-word", whiteSpace: "pre-line" }}
              >
                {item?.points}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
