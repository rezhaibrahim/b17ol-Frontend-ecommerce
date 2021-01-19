/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../assets/css/profile.css';
import {
  Button,
  Card, Col, Form, FormText, Input, Jumbotron, Label, Modal, ModalBody, ModalFooter, Row,
} from 'reactstrap';

// importing images
import edit from '../../assets/images/edit.svg';
import user from '../../assets/images/user.svg';
import map from '../../assets/images/map.svg';
import order from '../../assets/images/order.svg';

// importing components
import Navbar from '../../components/Navigation';

import profileAction from '../../redux/actions/user';

const { REACT_APP_API_URL } = process.env;

export default function Profile() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [body, setBody] = useState({});
  const {token} = useSelector((state) => state.auth);
  const { profile, alertMsg } = useSelector((state) => state.user);
  const status = useSelector((state) => state.user);
  const form = new FormData();
  const dispatch = useDispatch();
  // console.log("upload",status.isUpload);
  // console.log(`${REACT_APP_API_URL}${image}`);

  useEffect(() => {
    dispatch(profileAction.getDetail(token))
    if (status.isUpload) {
      dispatch(profileAction.getDetail(token))
    }
  }, [status.isUpload]);
  useEffect(() => {
    if (profile.length) {
      setName(profile[0].name);
      setEmail(profile[0].email);
      setPhone(profile[0].phone);
      setBirthdate(profile[0].birthdate);
      setGender(profile[0].gender);
      setImage(profile[0].profile_picture);
    }
  }, [profile]);



  const saveChange = (e) => {
    e.preventDefault();
    let gender = '';
    if (gender === 'pria') {
      gender =  'pria';
    } else {
      gender =  'wanita';
    }
    const form = new FormData();
    console.log("data",form);
    form.append('name', name)
    form.append('email', email)
    form.append('phone', phone)
    // form.append('gender', gender)
    form.append('birthdate', birthdate)
    // setBody({
    //   name,
    //   email,
    //   phone,
    //   gender,
    //   birthdate,
    // });
    dispatch(profileAction.updateDetail(token, form));
  };


  const uploadPict = (e) => {
    console.log(e.target.files);
    form.append('image', e.target.files[0]);
    dispatch(profileAction.uploadPhoto(token, form));
    if (profile.length) {
      // console.log("cek",profile[0].profile_picture);
      setImage(profile[0].profile_picture);
    }
    dispatch(profileAction.reset())
    
  };

  // const SaveData = (e) => {
  //   console.log('',e.target);
  //   form.append('name', e.target.body[0])
  //   dispatch(profileAction.updateDetail(token,form))
  //   if (profile.length) {
  //     setName(profile[0].name)
  //   }
  // }

  return (
    <>
      <div className="vh-100">
        <Navbar />
        <Row>
          <Col md={3}>
            <div className="sidebar mt-5">
              <Row>
                <Col md={4}>
                  <img className="rounded-circle" src={`${REACT_APP_API_URL}${image}`} alt="avatar" width="60px" height="60px" />
                </Col>
                <Col md={8}>
                  <div>{name}</div>
                  <div className="edit d-flex align-items-center">
                    <div className="icon">
                      <img src={edit} alt="..." width="16px" height="16px" />
                    </div>
                    <div className="desc">
                      <span>Ubah profile</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Link to="/my-profile" className="linkColor">
                <Row className="d-flex align-items-center mt-5">
                  <Col md={3}>
                    <Button style={{ backgroundColor:'#456BF3',borderRadius:30,width:50,height:50, justifyContent:'center',alignItems:'center',paddingRight:25 }}>
                      <img style={{width:25,height:30}} src={user} alt="" />
                    </Button>
                  </Col>
                  <Col>
                    <span>My Account</span>
                  </Col>
                </Row>
              </Link>
              <Link to="/my-address" className="linkColor">
                <Row className="map d-flex align-items-center mt-3">
                  <Col md={3}>
                    <Button className='address' style={{ backgroundColor:'#F36F45',borderRadius:30,width:50,height:50, justifyContent:'center',alignItems:'center',paddingRight:25 }}>
                      <img style={{width:25,height:30}}  src={map} alt="" />
                    </Button>
                  </Col>
                  <Col>
                    <span>Shipping Address</span>
                  </Col>
                </Row>
              </Link>
              <Link to="/my-order" className="linkColor">
                <Row className="order d-flex align-items-center mt-3">
                  <Col md={3}>
                    <Button style={{ backgroundColor:'#F3456F',borderRadius:30,width:50,height:50, justifyContent:'center',alignItems:'center',paddingRight:25 }}>
                      <img style={{width:25,height:30}} src={order} alt="" />
                    </Button>
                  </Col>
                  <Col>
                    <span>My Order</span>
                  </Col>
                </Row>
              </Link>
            </div>
          </Col>
          <Col md={9}>
            <Jumbotron fluid className="h-100 m-0">
              <Card className="main ml-5">
                <div className="m-4">
                  <div className="h5 font-weight-bold">My Profile</div>
                  <div className="text-muted">Manage your profile information</div>
                  <div className="my-3" style={{ backgroundColor: '#D4D4D4', height: 2 }}>&nbsp;</div>
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form onSubmit={saveChange}>
                        <Row className="d-flex align-items-center mb-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted"  for="name">Name</Label>
                          </Col>
                          <Col>
                            <Input onChange={(e) => setName(e.target.value)} className="rounded-lg" type="text" name="name" value={name} style={{ height: 48 }} />
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted" for="email">Email</Label>
                          </Col>
                          <Col>
                            <Input onChange={(e) => setEmail(e.target.value)} className="rounded-lg" type="text" name="email" value={email} style={{ height: 48 }} />
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted" for="phone">Phone Number</Label>
                          </Col>
                          <Col>
                            <Input onChange={(e) => setPhone(e.target.value)} className="rounded-lg" type="text" name="phone" value={phone} style={{ height: 48 }} />
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted">Gender</Label>
                          </Col>
                          <Col>
                            <Row className="ml-2">
                              {['pria', 'wanita'].map((item, i) => (
                                <Label className={i === 'pria' ? 'ml-3' : 'ml-5'}>
                                  <Input onChange={() => setGender(item)} name="gender" type="radio" checked={item === gender} />
                                  <span>{item}</span>
                                </Label>
                              ))}
                            </Row>
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted" for="email">Date of Birth</Label>
                          </Col>
                          <Col>
                            <Input
                              onChange={(e) => setBirthdate(e.target.value)}
                              type="text"
                              name="date"
                              placeholder="date"
                              value={birthdate}
                            />
                            <FormText color="muted">format: yyyy-mm-dd</FormText>
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-5">
                          <Col md={4} className="text-right" />
                          <Col md={8}>
                            <Modal centered isOpen={alertOpen} className="text-center">
                              <ModalBody>
                                {alertMsg}
                              </ModalBody>
                              <ModalFooter>
                                <Button onClick={() => setAlertOpen(false)}>Close</Button>
                              </ModalFooter>
                            </Modal>
                            <Button  type="submit" className="btn-1 rounded-pill" style={{ width: 100 }}>Save</Button>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                    <Col md={1} className="p-0 d-flex justify-content-center">
                      <div className="h-50" style={{ backgroundColor: '#D4D4D4', width: 2 }}>&nbsp;</div>
                    </Col>
                    <Col md={3} className="pr-5">
                      <Form className="d-flex flex-column align-items-center">
                        <div>
                          <img className="rounded-circle" src={`${REACT_APP_API_URL}${image}`} alt="avatar" width="110px" height="110px" />
                        </div>
                        <div className="my-4">
                          {/* <Button type="submit" className="btn-2 rounded-pill" style={{ width: 140 }}>Select Image</Button> */}
                          <label>
                            <span className="btn btn-2 rounded-pill">Select Image</span>
                            <Input onClick={uploadPict} style={{ display: 'none' }} type="file" accept=".jpg,.png" />
                          </label>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    </>
  );
}
