import React from "react";
import { useSelector } from "react-redux";
import styles from "./Intro.module.css";

export default function Intro() {
  const introData = useSelector((state) => state.Intro);
  const { educations = [] } = useSelector((state) => state.Education);

  return (
    <>
      <div className={styles.introRow}>
        <div className={styles.introBlock} style={{ textAlign: "justify" }}>
          <div> {introData.name} </div>
          <div> {introData.current_position}</div>
          <div> {introData.phone}</div>
          <div> {introData.email}</div>
        </div>
        <div className={styles.introBlock} style={{ textAlign: "right" }}>
          <div> Indian Institute of</div>
          <div> Technology</div>
          <div> Roorkee</div>
        </div>
      </div>
      <div className={styles.educationContainer}>
        <h2>Education</h2>
        <table>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th style={{ textAlign: "end" }}>Grade</th>
          </tr>
          {educations.length === 0 && (
            <tr>
              <td>IITR</td>
              <td>BTech</td>
              <td>7</td>
            </tr>
          )}
          {educations.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.degree}</td>
                <td style={{ textAlign: "end" }}>{item.grade}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
