import React, { useState, useEffect } from "react";
import { Col, Container, Button, Form, Row } from "react-bootstrap";
import Header from "../../components/shared/Header/Header";
import { sampleUser } from "../../assets/assets";
import Speak from "speak-tts";
import "./styles.css";

const steps = [
  {
    label: "Profile Registration",
    fields: [
      { label: "First Name", name: "firstName" },
      { label: "Last Name", name: "lastName" }
    ]
  },
  {
    label: "Skills",
    fields: [
      { label: "Email", name: "email" },
      { label: "Password", name: "password", type: "password" }
    ]
  },
  {
    label: "Employment History",
    fields: [
      { label: "Address", name: "address" },
      { label: "City", name: "city" },
      { label: "State", name: "state" },
      { label: "Zip", name: "zip" }
    ]
  }
];

const WizardForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [speaker, setSpeaker] = useState(null);

  useEffect(() => {
    const sp = new Speak();
    sp.init().then(() => {
      setSpeaker(sp);
    });
  }, []);

  useEffect(() => {
    if (speaker && step < steps.length) {
      const stepLabel = `Step ${step + 1}: ${steps[step].label}`;
      speaker.speak({ text: stepLabel, voice: "Google US English" });
    }
  }, [speaker, step]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const handleClickPrev = (e) => {
    e.preventDefault();
    console.log(formData);
    if (step <= steps.length - 1 && step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const currentStep = steps[step];

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Header userImage={sampleUser} />
          <div className="col-sm-12 col-md-6 offset-md-3">
          <h1>Wizard Form</h1>
          <Form onSubmit={handleSubmit}>
            {currentStep.fields.map((field) => (
              <Form.Group key={field.name}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                  type={field.type || "text"}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>
            ))}
            <div className="text-center">
            { ( step > 0 || steps.length -1 < step ) && <Button variant="primary" type="button" onClick={handleClickPrev}>
                {"Back"}
              </Button> }
              <Button variant="primary" type="submit">
                {step === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </Form>
          <div className="mt-3">
            {steps.map((s, i) => (
              <span
                key={i}
                className={`step-label ${i === step ? "active" : ""}`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WizardForm;