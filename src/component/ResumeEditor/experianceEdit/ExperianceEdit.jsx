import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEducation } from "../../../store/actions/education";
import styles from "../educationEdit/EducationEdit.module.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
const INITIAL_HEIGHT = "4.1875rem";
import Form from "react-bootstrap/Form";

export default function ExperianceEdit() {
  const { educations = [] } = useSelector((state) => state.Education);

  const dispatch = useDispatch();
  const textAreaRef = useRef();

  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState("");
  const [subheading, setsubheading] = useState("");
  const [points, setPoints] = useState("");

  const handleOnSubmit = (e) => {
    dispatch(
      setEducation([
        ...educations,
        {
          id: educations.length + 1,
          heading: heading,
          subheading: subheading,
          points: points,
        },
      ])
    );
    setShow(false);
    setHeading("");
    setsubheading("");
    setPoints("");
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
            <Form.Label>Heading</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter"
              className={styles.inputEducation}
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="position">
            <Form.Label>Subheading</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter"
              className={styles.inputEducation}
              value={subheading}
              onChange={(e) => setsubheading(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              ref={textAreaRef}
              placeholder="Enter"
              className={styles.inputEducation}
              style={{ height: "100px" }}
              value={points}
              onChange={(e) => {
                const text = e.target.value;
                const textArea = textAreaRef.current;
                textArea.style.height = INITIAL_HEIGHT;
                let height = (+textArea.scrollHeight + 2) / 16;
                textArea.style.height = height + "rem";
                setPoints(text);
              }}
            />
          </Form.Group>
        </Form>
        <Button
          variant="secondary"
          onClick={handleSecondaryChange}
          style={{ marginRight: "1rem" }}
        >
          Close
        </Button>
        <Button variant="primary" onClick={handleOnSubmit}>
          Save Changes
        </Button>
      </>
    );
  };

  useEffect(() => {
    if (textAreaRef.current) textAreaRef.current.style.height = INITIAL_HEIGHT;
  }, []);

  const handleClose = () => setShow(false);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        {" "}
        Add Experiance
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        name="experiancend"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Experiance</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{content()}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
