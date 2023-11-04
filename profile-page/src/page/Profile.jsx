import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "./profile.css";
import dilanJpeg from "/dilan.jpg";

function ProfilePage() {
  return (
    <Container className="profile-container">
      <Row>
        <Col md={4}>
          <Image src={dilanJpeg} alt="dilan" roundedCircle fluid />
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Iqbal Ramadhan</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Si Dilan Bandung Pokonamah</Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur dolorum voluptates magnam vero, temporibus, reprehenderit possimus mollitia a adipisci beatae ullam ex, autem doloribus aspernatur? Quod corporis quis
                excepturi culpa.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
