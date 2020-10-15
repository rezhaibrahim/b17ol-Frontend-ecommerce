import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import {
  Row, Col, Jumbotron, Card, Container,
  Form, Label, Input, Button, Media
} from 'reactstrap'

import Navbar from '../../components/Navigation'

import Pencil from '../../assets/img/pensil.svg'
import UserLogo from '../../assets/img/user 1.svg'
import Shipping from '../../assets/img/map-pin (3) 1.svg'
import Clipboard from '../../assets/img/clipboard 1.svg'

import store from '../../redux/store'
import auth from '../../redux/actions/auth'

import profileAction from '../../redux/actions/profile'

class Profile extends Component {
  state = {
    radioMale: true,
    radioFemale: false,
    name: '',
    email: '',
    phone: '',
    gender: '',
    urlPicture: '',
    birth: ''
  }

  update = (e) => {
    e.preventDeafult()
    const { name, email, phone, gender, urlPicture, birth } = this.state
    const data = { name, email, phone, gender, urlPicture, birth }
    store.dispatch(profileAction.updateProfile(this.props.auth.token, data))
    // this.props.update(data)
  }
  componentDidMount() {
    this.props.getProfile(this.props.auth.token)
    // console.log(this.props.getProfile(this.props.auth.token))
  }

  onChangeText = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    // console.log(this.props.profile.data)
    // console.log(this.state)
    const { data } = this.props.profile
    return (
      <>
        <Navbar />
        <Container>
          <Row className='mt-4'>
          
            <div className='sidenav col-3'>
              
              <div className='menu-wrapper'>
              <Media className="align-items-center mb-5">
                <Media left>
                  <Media className="rounded-circle m-3" object src="https://via.placeholder.com/50" />
                </Media>
                <Media body>
                  <div className="strong">
                    Name
                            </div>
                  <Link className='d-flex flex-row align-items-center text-decoration-none'>
                    <img src={Pencil} alt='pencil' />
                    <p className='mb-0 ml-1 text-muted '>Ubah profile</p>
                  </Link>
                </Media>
              </Media>
                <div className='d-flex flex-row'>
                  <div class="user mr-3">
                    <img src={UserLogo} alt='userLogo' />
                  </div>
                  <p style={{ fontWeight: 600 }} >My Account</p>
                </div>
                <div className='d-flex flex-row'>
                  <div class="map mr-3">
                    <img src={Shipping} alt='shipping' />
                  </div>
                  <Link to='/address' className='text-reset text-decoration-none' > <p className='text-muted '>Shipping Address</p></Link>
                </div>
                <div className='d-flex flex-row'>
                  <div class="clipboard mr-3">
                    <img src={Clipboard} alt='clipboard' />
                  </div>
                  <Link to='/order' className='text-reset text-decoration-none'> <p className='text-muted '>My Order</p></Link>
                </div>
              </div>
            </div>

            <Jumbotron className='col-9 bg-light'>
              <Card className='p-3'>
                <p className='heading-text mb-1'>My Profile</p>
                <p className='subheading-text mb-1'>Manage your profile information</p>
                <hr />

                <Form onSubmit={this.update}>
                  <Row>
                    <div className='col-8 row left-form'>
                      <Label className='col-5 label mb-4 text-right'>Name</Label>
                      <Input type='text' name='name' className='col-7 mb-3' value={data.name} onChange={this.onChangeText} />
                      <Label className='col-5 label mb-4 text-right '>Email</Label>
                      <Input className='col-7 mb-3' value={data.email}></Input>
                      <Label className='col-5 label mb-4 text-right ' >Phone number</Label>
                      <Input className='col-7 mb-3' value={data.phone}></Input>
                      <Label className='col-5 label mb-4 text-right '>Gender</Label>
                      <Label check className='col-3 mb-4'>
                        <Input className="ml-4" type="radio" name="radio2" value='male' te/>{' '}
                        Laki-laki
                      </Label>
                      <Label check className='col-3 mb-4'>
                        <Input className="ml-5" type="radio" name="radio2" value='female' />{' '}
                      Perempuan
                    </Label>
                      <Label className='col-5 label mb-4 text-right '>Date of birth</Label>
                      <Input className='col-7 mb-3'
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                        value={data.birth}
                      />

                      <Button className='save mx-auto mt-2'>Save</Button>
                    </div>
                    <label className="ml-5 line"/>
                    <Media className="flex-column align-items-center ml-5">
                      <Media top>
                        <Media className="rounded-circle" src="https://via.placeholder.com/125" />
                      </Media>
                      <Media body>
                        <Button className="rounded-pill border px-4 mt-3" color="white">select image</Button>
                      </Media>
                    </Media>
                  </Row>
                </Form>
              </Card>
            </Jumbotron>
          </Row>
        </Container>
      </>
    )
  }
}


const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})
const mapDispatchToProps = {
  getProfile: profileAction.getProfile,
  updateProfile: profileAction.updateProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)