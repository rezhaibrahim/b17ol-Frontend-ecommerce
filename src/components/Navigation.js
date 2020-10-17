import React from 'react';
import {
  Container, Collapse, Navbar, NavbarBrand,
  Nav, NavbarToggler, NavItem, Row, Col,
  Input, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

// importing images
import logo from '../assets/img/logo.svg';
import search from '../assets/img/search.svg';
import filter from '../assets/img/filter.svg';
import cart from '../assets/img/cart.svg';
import bell from '../assets/img/bell.svg';
import mail from '../assets/img/mail.svg';
import profile from '../assets/img/profile.jpg';
import {connect} from 'react-redux'


 class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
      dropdownOpen:false
    };
  }

  render() {
    console.log("cek:",this.props.auth.token);
    if(localStorage.getItem('customer')&& this.props.auth.token !== null){
      this.props.auth.isLogin = true
    }
    return (
      <>
      {!this.props.auth.isLogin  ? 
       <Navbar color="light" light expand="md" className="shadow sticky-top">
        <Container>
          <Row className="w-100 align-items-center no-gutters">
            <Col xs="12" lg="2" className="mx-auto">
              <div className="mx-auto text-center">
                <NavbarBrand>
                  <Link to="/">
                    <img img src={logo} alt="Logo Shop.id" style={{ width: 119, height: 44 }} />
                  </Link>
                </NavbarBrand>
              </div>
            </Col>
            <Col xs="12" lg="10">
              <div className="text-right">
                <NavbarToggler onClick={() => { this.setState({ navbarOpen: !this.state.navbarOpen }); }} />
              </div>
              <Collapse navbar isOpen={this.state.navbarOpen}>
                <Row className="w-100 align-items-center no-gutters">
                  <Col xs="12" lg="8" className="w-100">
                    <Row className="no-gutters mt-3 mt-lg-0">
                      <Col xs="10" lg="10" className="w-100">
                        <div className="d-flex position-relative">
                          <div className="w-100">
                            <Nav navbar className="w-100">
                              <NavItem className="w-100">
                                <Input className="rounded-pill w-100 input pl-4" type="search" placeholder="Search" aria-label="Search" />
                              </NavItem>
                            </Nav>
                          </div>
                          <div className="search-icon position-absolute">
                            <Nav navbar className="w-100">
                              <NavItem className="w-100">
                                <img src={search} alt="Search Icon" />
                              </NavItem>
                            </Nav>
                          </div>
                        </div>
                      </Col>
                      <Col xs="1" lg="1" className="ml-2">
                        <div className="">
                          <Nav navbar className="w-100">
                            <NavItem className="w-100">
                              <Button className="btn-3" style={{background:"#ffff"}} name="filter">
                                <img src={filter} alt="Filter" />
                              </Button>
                            </NavItem>
                          </Nav>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12" lg="4" className="w-100">
                    <Row className="align-items-center">
                      <Col xs="12" lg="4">
                        <Nav navbar className="w-100">
                          <NavItem className="w-100 cart text-center">
                            <Link to="/login">
                              <img src={cart} alt="My Cart" />
                            </Link>
                          </NavItem>
                        </Nav>
                      </Col>
                      <Col xs="6" lg="4" className="text-center">
                        <Nav navbar className="w-100">
                          <NavItem className="w-100">
                            <Link to="/login">
                              <Button className="w-100 btn-1 nav px-3 rounded-pill text-center justify-content-center " name="login">Login</Button>
                            </Link>
                          </NavItem>
                        </Nav>
                      </Col>
                      <Col xs="6" lg="4" className="text-center">
                        <Nav navbar className="w-100">
                          <NavItem className="w-100">
                            <Link to="/register">
                              <Button className="w-100 btn-2 nav px-3 rounded-pill justify-content-center " name="signup">Signup</Button>
                            </Link>
                          </NavItem>
                        </Nav>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar> : <Navbar color="light" light expand="md" className="shadow sticky-top">
        <Container>
          <Row className="w-100 align-items-center no-gutters">
            <Col xs="12" lg="2" className="mx-auto">
              <div className="mx-auto text-center">
                <NavbarBrand>
                  <Link to="/">
                    <img src={logo} alt="Logo Shop.id" style={{ width: 119, height: 44 }} />
                  </Link>
                </NavbarBrand>
              </div>
            </Col>
            <Col xs="12" lg="10">
              <div className="text-right">
                <NavbarToggler onClick={() => { this.setState({ navbarOpen: !this.state.navbarOpen }); }} />
              </div>
              <Collapse navbar isOpen={this.state.navbarOpen}>
                <Row className="w-100 align-items-center no-gutters">
                  <Col xs="12" lg="8" className="w-100">
                    <Row className="no-gutters mt-3 mt-lg-0">
                      <Col xs="10" lg="10" className="w-100">
                        <div className="d-flex position-relative">
                          <div className="w-100">
                            <Nav navbar className="w-100">
                              <NavItem className="w-100">
                                <Input className="rounded-pill w-100 input pl-4" type="search" placeholder="Search" aria-label="Search" />
                              </NavItem>
                            </Nav>
                          </div>
                          <div className="search-icon position-absolute">
                            <Nav navbar className="w-100">
                              <NavItem className="w-100">
                                <img src={search} alt="Search Icon" />
                              </NavItem>
                            </Nav>
                          </div>
                        </div>
                      </Col>
                      <Col xs="1" lg="1" className="ml-2">
                        <Nav navbar className="w-100">
                          <NavItem className="w-100">
                            <Button className="btn-3 " style={{background:"#ffff"}}>
                              <img src={filter} alt="Filter" />
                            </Button>
                          </NavItem>
                        </Nav>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12" lg="4" className="w-100">
                    <Row className="align-items-center no-gutters mt-3 mt-lg-0">
                      <Col xs="3" lg="3">
                        <Nav navbar className="w-100">
                          <NavItem className="w-100 cart text-right">
                            <Link to="/mybag">
                              <img src={cart} alt="My Cart" />
                            </Link>
                          </NavItem>
                        </Nav>
                      </Col>
                      <Col xs="3 text-center" lg="3">
                        <Nav navbar className="w-100">
                          <NavItem className="w-100">
                            <Link to="/">
                              <img src={bell} alt="Notification" />
                            </Link>
                            
                          </NavItem>
                        </Nav>
                      </Col>
                      <Col xs="3 text-center" lg="3">
                        <Nav navbar className="w-100">
                          <NavItem className="w-100">
                            <Link to="/message">
                              <img src={mail} alt="Message" />
                            </Link>
                          </NavItem>
                        </Nav>
                      </Col>
                      <Col xs="3 text-center" lg="3">
                        <Nav navbar className="w-100">
                          <NavItem className="w-100">
                            <Link to="/profile">
                              <img className="rounded-circle" src={profile} alt="Profile" />
                            </Link>
                          </NavItem>
                        </Nav>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>}
     
      </>
    );
  }
}

const mapStateToProps = state => ({

  auth: state.auth
})
export default connect(mapStateToProps)(NavigationBar)