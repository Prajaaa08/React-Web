import { Container, Row, Col } from "react-bootstrap";
import { kelasTerbaru } from "../data/index";
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
                            <p className="mb-4">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. VeriLorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis expedita doloribus est porro consequuntur impedit.
                            </p>
                            <button className="btn btn-danger btn-lg-rounded-1 me-2 mb-xs-0 mb-2">Lihat Kelas</button>
                            <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2">Lihat Promo</button>
                        </Col>
                        <Col lg="6" className="pt-lg-0 pt-5">
                            <img src={HeroImage} alt="hero-img" />
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className="kelas w-100 min-vh-100">
                <Container>
                    <Row>
                        <Col>
                        <h1 className="text-center fw-bold">Kelas Terbaru</h1>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </Col>
                    </Row>
                    <Row>
                        {kelasTerbaru.map((kelas) => {
                            return <Col key={kelas.id}>
                                <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
                                <div className="star mb-2">
                                    <i className={kelas.star1}></i>
                                    <i className={kelas.star2}></i>
                                    <i className={kelas.star3}></i>
                                    <i className={kelas.star4}></i>
                                    <i className={kelas.star5}></i>
                                </div>
                            </Col>;
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default HomePage;