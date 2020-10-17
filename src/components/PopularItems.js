
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Card, CardImg, CardBody, CardText
} from 'reactstrap';



export default function PopularItems({ dataPopular }) {
  // console.log("cek",dataPopular);
  return (
    <>
      <Container className="mt-3">

        <div>
          <span className="h2 font-weight-bold">Popular</span>
        </div>
        <div>
          <span className="text-muted h6 small">You've never seen it before!</span>
        </div>


          <Row className="d-flex justify-content-between no-gutters">
        {dataPopular.map(dataPopular => (
          
            <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
              <Link className="card-product" to="/items/detail">
                <Card className="rounded-lg shadow card-product">
                  <CardImg top width="100%" src={`http://localhost:8080/${dataPopular.picture.replace('assets/', '')}`} alt="Item image" />
                  <CardBody>
                    <CardText className="m-0"><span className="font-weight-bold h6">{dataPopular.itemName}</span></CardText>
                    <CardText className="m-0"><span className="font-weight-bold h5 text-danger">Rp.{dataPopular.price}</span></CardText>
                    <CardText className="m-0"><span className="text-muted h6">{dataPopular.category}</span></CardText>
                  </CardBody>
                </Card>
                </Link>
            </Col>
))}
            </Row>
      </Container>
    </>
  );
}
