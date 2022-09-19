import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer_logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-3">
                  <i class="ri-car-line"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer_logo_content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              alias consequatur. Voluptates cumque unde esse deleniti error,
              aliquam modi vero vitae maxime similique dolor excepturi beatae,
              numquam iusto. Quis, a.
            </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick_link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title mb-4">Head Office</h5>
              <p className="office_info">
                JL. Pulo Asem Timur V no 4, Rawamangun, Jakarta, Indonesia
              </p>
              <p className="office_info">Phone : +62 812-1315-3808</p>
              <p className="office_info">
                Email : febriantaramuhamad@gmail.com
              </p>
              <p className="office_info">Office Time : 10am - 21pm</p>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer_link-title">NewsLetter</h5>
              <p className="section_description">Subscribe Our Newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email..." />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer_bottom">
              <p className="section_description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed By
                Febriantara Muhammad. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
