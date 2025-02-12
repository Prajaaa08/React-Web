import {Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">Ngoding</h3>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam similique nam accusamus eligendi perspiciatis minima animi </p>
            <div className="no">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p>+62 896-5254-2130</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
              <i className="fa-regular fa-envelope"></i>
              <p>person-email@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
};

export default FooterComponent;
