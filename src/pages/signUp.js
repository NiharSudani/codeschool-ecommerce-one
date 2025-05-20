import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Signup = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Left image */}
        <Col md={6}>
          <img
            src="Signup.png"
            alt="Signup img"
            className="img-fluid"
          />
        </Col>

        
        <Col md={6}>
          <h3 className="mb-3 fw-bold">Create an account</h3>
          <p className="mb-4">Enter your details below</p>

          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="Email or Phone Number" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button type="submit" variant="danger" className="w-100 mb-3">
              Create Account
            </Button>

            <Button variant="outline-secondary" className="w-100">
              Sign up with Google
            </Button>

            <p className="mt-4 text-center">
              Already have an account? <a href="#">Log in</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
