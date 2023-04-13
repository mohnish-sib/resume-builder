import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEducation } from "../../../store/actions/education";
import styles from "./EducationEdit.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function EducationEdit() {
  const { educations = [] } = useSelector((state) => state.Education);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [grade, setGrade] = useState("");

  const handleOnSubmit = (e) => {
    dispatch(
      setEducation([
        ...educations,
        {
          id: educations.length + 1,
          name: schoolName,
          degree: degree,
          grade: grade,
        },
      ])
    );
    setShow(false);
    setSchoolName("");
    setDegree("");
    setGrade("");
    console.log("primary fired");
  };

  const handleSecondaryChange = (event) => {
    console.log("secondary fired");
    setShow(false);
  };

  const content = () => {
    return (
      <>
        <Form className={styles.introBlock}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>School</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter"
              className={styles.inputEducation}
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="position">
            <Form.Label>Degree</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter"
              className={styles.inputEducation}
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Grade</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter"
              className={styles.inputEducation}
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </Form.Group>
        </Form>
      </>
    );
  };

  const handleShowModal = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
        Add Education
      </Button>

      <Modal show={show} onHide={handleSecondaryChange}>
        <Modal.Header closeButton>
          <Modal.Title>Education</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSecondaryChange}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOnSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
