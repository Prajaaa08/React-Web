import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

const HomePage = () => {    
    return (
        <div className="homepage">
            <header className="w-100 min-vh-100">
                <Container>
                    <Row className="header-box d-flex align-items-center">
                        <Col lg="6">
                            <h1 className="mb-4">
                                Temukan <br /> <span>Bakat Kreatifmu</span> Bersama Kami!
                            </h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. VeriLorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis expedita doloribus est porro consequuntur impedit.
                            </p>
                            <button>Lihat Kelas</button>
                            <button>Lihat Promo</button>
                        </Col>
                        <Col>
                            <img src={HeroImage} alt="hero-img" />
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className="kelas w-100 min-vh-100"></div>
        </div>
    );
};

export default HomePage;