// import React, { Component } from 'react';
// import logo from '../assets/img/logo.svg'
// import '../assets/css/login.css'
// import { Container, Col, Row ,Input} from 'reactstrap'
// export default class Login extends Component {
//   constructor(props){
//     super(props);
//     this.state={

//     }
//   }
//   render() {
//     return (
//       <Container fluid >
//         <Container className='mt-2 d-flex justify-content-center align-items-center flex-column' >

//           <Row>

//             <Col className='mt-5 d-flex justify-content-center align-items-center flex-column'>
//               <img src={logo} alt="logo blanja" />
//               <p className='mt-5 message' >Please login with account</p>
//             </Col>
//           </Row>
//           <Row>
//             <Col className="mt-2 mb-4  d-flex justify-content-center align-items-center">
//               <button className='button first' >Custommer</button><button className='button second'>Seller</button>
//             </Col>
//           </Row>
//           <Row>

//             <Col lg={12}>
//               <Input className="mb-2 input" type='text' placeholder='Email' />
//               <Input className="mt-2" type='password' placeholder='Password' />
//               <Col className="d-flex justify-content-end mt-3 ">
//                 <span className='forgot'>
//                   Forgot your password?
//                 </span>
//               </Col>
//               <input className="mt-3 loginBtn" type='submit' value="Login" />
//               <div className="d-flex justify-content-center mt-4 mb-5">
//                 <span>Don't have a Tokopedia account? <span className='forgot'>Register</span> </span>
//               </div>
//             </Col>

//           </Row>
//         </Container>
//       </Container>
//     );
//   }
// }
import React, { Component } from 'react'
import {Form, Input, Label, Button, Alert,Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../assets/css/login.css'
import store from '../redux/store'
import auth from '../redux/actions/auth'

// import image
import Logo from '../assets/img/logo.svg'

class Login extends Component {
  localStorage;
  state = {
    email: '',
    password: '',
    buttonSeller: false,
    buttonCust: true
  }

  login = (e) => {
    e.preventDefault()
    
    const { email, password } = this.state
    const data = {
      email,
      password
    }
    // this.props.login(data)
    store.dispatch(auth.login(data))
    // this.props.history.push('/')
  }

  toggleButton = (val) => {
    if(val==='seller'){
      this.setState({
        buttonCust: false,
        buttonSeller: true
      })
    } else if(val==='customer') {
      this.setState({
        buttonCust: true,
        buttonSeller: false
      })
    }
  }

  onChangeText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidUpdate(){
    console.log("asd",this.props.auth)
    localStorage.setItem('customer',JSON.stringify(`email:${this.state.email},Token:${this.props.auth.token}`));
    this.localStorage = JSON.parse(localStorage.getItem('customer'));
    if(this.props.auth.isLogin){
      console.log('ok')
      
      this.props.history.push('/')
    }
  }
  

  render() {
    // console.log(this.props.match.path)
    return (
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <div style={{width: 400}}>
          <div className='header-login text-center'>
            <img className='logo mb-3' src={Logo} alt='logo.svg' />
            <div className='message mb-4'>
              <span>Please login with your account</span>
            </div>
            
            <Col className="mt-2 mb-4  d-flex justify-content-center align-items-center">
               <button className='button first' onClick={()=>this.toggleButton('customer')} active={this.state.buttonCust} >Custommer</button><button onClick={()=>this.toggleButton('seller')} active={this.state.buttonSeller} className='button second'>Seller</button>
           </Col>
          </div>
          <Form onSubmit={this.login}>
            <Input onChange={this.onChangeText} name='email' type='email' id='email' placeholder='Email'/>
            <Input className='mt-3' onChange={this.onChangeText} name='password' type='password' id='password' placeholder='Password'/>
            <div className=' text-right mt-3'>
              <Link to='/' className='forgot'>Forgot Password?</Link>
            </div>
            <button  type='submit' className='mt-3 bgBtn rounded-pill'>Login</button>
          </Form>
          <div class="text-center quest-wrapper mt-3">
            <span>Don't have any account? </span> <Link to='/register' className='forgot' >Register</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  login: auth.login
}

const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps, mapDispatchToProps)(Login)