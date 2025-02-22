import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";
import "../dist/css/main.css";

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2">Syarat & Ketentuan</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default SyaratKetenPage