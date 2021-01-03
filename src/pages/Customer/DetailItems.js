/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import {
  Button, Col, Container, Modal, ModalBody, Row,
} from 'reactstrap';

import itemsAction from '../../redux/actions/item';
import cartAction from '../../redux/actions/mybag';

import Navigation from '../../components/Navigation';
import Rating from '../../components/StarRatings';

import product1 from '../../assets/images/product1.svg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product3.jpg';
import product4 from '../../assets/images/product4.jpg';
import { Link, Redirect } from 'react-router-dom';

export class DetailItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      token: this.props.auth.token,
      data: {},

    };
  }
  componentDidMount() {
    this.props.getDetailItems(this.state.id);
    // console.log("asdsad",this.props.location)
    // console.log("detail:",this.props.getDetailItems(this.state.id));
  }

  addCart = (itemsId) =>
  {
    // console.log("cart:",itemsId)
    const cart = {
      itemsId,
      qty: 1
    }
    if (this.props.auth.isLogin === false) {
      const location = {
        pathname: '/login',
        state: {
          location: this.props.location.pathname
        }
      }
     
      this.props.history.replace(location)
    } else {
      this.props.addCart(this.state.token, cart)
      setTimeout(()=>{
        this.props.clearMsg()
      },2000)
    }
  }

  render() {
    const { dataDetail } = this.props.item;
    // const data = dataDetail.picture
    // console.log("asd:",this.props.auth.isLogin);
    const { alertMsg } = this.props.cart
    // console.log(this.props.cart.data);
    let results = {};
    // console.log("cek:",dataDetail);
    if (dataDetail !== null) {
      results = dataDetail;
    }
    // console.log('asdasdqwe',results)
    return (
      <>
      <Navigation />
        <Container className="mt-4">
          <Modal centered isOpen={alertMsg !== ''}>
            <ModalBody className='text-center'>
              {alertMsg}
            </ModalBody>
          </Modal>
          <div>
            <span className="text-muted h6">{`Home > Category > ${dataDetail.category}`}</span>
          </div>
          <Row className="my-3">
            <Col md={6}>
              <Row>
                <Col md={6} className="my-3">
                  <img width="100%" src={product1} alt="..." />
                </Col>
                <Col md={6} className="my-3">
                  <img width="100%" src={product2} alt="..." />
                </Col>
                <Col md={6} className="my-3">
                  <img width="100%" src={product3} alt="..." />
                </Col>
                <Col md={6} className="my-3">
                  <img width="100%" src={product4} alt="..." />
                </Col>
              </Row>
            </Col>
            <Col md={6} className="my-3 d-flex flex-column">
              <span className="h4 font-weight-bold">{dataDetail.itemName}</span>
              <span className="h6 text-muted">{dataDetail.store}</span>
              <div>
                <Rating number={dataDetail.rating} />
              </div>
              <span className="h6 text-muted mt-4">Price</span>
              <span className="h4 font-weight-bold">
                Rp.
                {numeral(dataDetail.price).format(0, 0).toString().replace(',', '.')
                  .replace(',', '.')}
              </span>
              <span className="mt-4">Color</span>
    <div>{dataDetail.color}</div>
              <Row className="mt-4">
                <Col md={7}>
                  <Row>
                    <Col md={6}>
                      <span>Size</span>
                    </Col>
                    <Col md={6}>
                      <span>Jumlah</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-4 no-gutters">
                <Col md={7}>
                  <Row className="">
                    <Col md={6} className="pr-1">
                      <Button block className="btn-2 rounded-pill py-2">Chat</Button>
                    </Col>
                    <Col md={6} className="pl-1">
                      <Button onClick={()=>this.addCart(results.id)} block className="btn-2 rounded-pill py-2">
                        Add cart
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-4 no-gutters">
                <Col md={7}>
                  <Button block className="btn-1 rounded-pill py-2">Buy Now</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="my-5">
            <div className="h4 font-weight-bold">Informasi Produk</div>
            <div className="h5 font-weight-bold mt-4">Condition</div>
            <div className="h5 font-weight-bold text-danger">{dataDetail.conditions}</div>
            <div className="h5 font-weight-bold mt-4">Description</div>
            <p className="text-muted">
              {dataDetail.description}
            </p>
          </div>
          <div className="my-5">
            <div className="h4 font-weight-bold">Product Review</div>
            <div className="mt-4">
              <Row>
                <Col md={5}>
                  <Row>
                    <Col md={4} className="d-flex flex-column justify-content-center">
                      <div className="display-4">
                        {dataDetail.rating !== null ? parseFloat(dataDetail.rating).toFixed(1) : 0}
                        <small className="h5 text-muted">/10</small>
                      </div>
                      <div>
                        <Rating number={dataDetail.rating} />
                      </div>
                    </Col>
                    <Col md={8}>
                      <Row>
                        <Col md={1} className="d-flex flex-column justify-content-center align-items-center">
                          <div>5</div>
                          <div>4</div>
                          <div>3</div>
                          <div>2</div>
                          <div>1</div>
                        </Col>
                        <Col md={1} className="d-flex flex-column justify-content-center align-items-center">
                          <div className="text-muted">5</div>
                          <div className="text-muted">4</div>
                          <div className="text-muted">3</div>
                          <div className="text-muted">2</div>
                          <div className="text-muted">1</div>
                        </Col>
                        <Col md={7} className="d-flex flex-column justify-content-center align-items-center">
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </Col>
                        <Col md={1} className="d-flex flex-column justify-content-center align-items-center">
                          <div className="text-muted">4</div>
                          <div className="text-muted">0</div>
                          <div className="text-muted">0</div>
                          <div className="text-muted">0</div>
                          <div className="text-muted">0</div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  item: state.itemNew,
  cart: state.cart
});

const mapDispatchToProps = {
  getDetailItems: itemsAction.getDetail,
  addCart: cartAction.addCart,
  clearMsg: cartAction.clearMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailItems);
// export default Product;
