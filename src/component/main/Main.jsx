import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ExperienceBlock from "../ExperienceBlock";
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

  const dispatch = useDispatch();

  const incOnClick = () => {
    dispatch({ type: "inc" });
  };

  const counter = useSelector((state) => state.counter);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.introRow}>
        <div className={styles.introBlock} style={{ textAlign: "justify" }}>
          <div> Mohnish Lokhande</div>
          <div> current status</div>
          <div> phone</div>
          <div> email</div>
        </div>
        <div className={styles.introBlock} style={{ textAlign: "right" }}>
          <div> Indian Institute of</div>
          <div> Technology</div>
          <div> Roorkee</div>
          <div onClick={incOnClick}>{counter}</div>
        </div>
      </div>
      <div className={styles.educationContainer}>
        <h2>Education</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
          </tr>
          <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
          </tr>
        </table>
      </div>
      <ExperienceBlock heading="Experiance" content={data} />
    </div>
  );
}
