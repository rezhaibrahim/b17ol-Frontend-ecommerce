import React, { Component } from 'react';
import logo from '../assets/img/logo.svg'
import '../assets/css/register.css'
import { Container, Col, FormGroup, Input, ButtonGroup, Button, Row } from 'reactstrap'
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <Container fluid >
        <Container className='mt-2 d-flex justify-content-center align-items-center flex-column' >

          <Row>

            <Col className='mt-5 d-flex justify-content-center align-items-center flex-column'>
              <img src={logo} alt="logo blanja" />
              <p className='mt-5 message' >Please sign up with your account</p>
            </Col>
          </Row>
          <Row>
            <Col className="mt-2 mb-3  d-flex justify-content-center align-items-center">
              <button className='button first' >Custommer</button><button className='button second'>Seller</button>
            </Col>
          </Row>
          <Row className="mt-2 mb-5  d-flex justify-content-center align-items-center">

            <Col lg={12} md={8} >
              <Input className="mb-2" type='text' placeholder='Name' />
              <Input className="mb-2" type='text' placeholder='Email' />
              <Input className="mb-2" type='password' placeholder='Password' />
              <input className="mt-3 loginBtn" type='submit' value="Register" />
              <div className="d-flex justify-content-center mt-4 mb-5">
              <span>Already have a Tokopedia account? <span className='forgot'>Login</span> </span>
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
    );
  }
}
