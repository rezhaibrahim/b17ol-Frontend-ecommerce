
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Card, CardImg, CardBody, CardText
} from 'reactstrap';



export default function NewItems({ dataNew }) {
  // console.log("cek",dataNew);
  return (
    <>
      <Container className="mt-3">

        <div>
          <span className="h2 font-weight-bold">New</span>
        </div>
        <div>
          <span className="text-muted h6 small">You've never seen it before!</span>
        </div>


          <Row className="d-flex justify-content-between no-gutters">
        {dataNew.map(dataNew => (
          
            <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
              <Link className="card-product" to="/items/detail/">
                <Card className="rounded-lg shadow card-product">
                  <CardImg top width="100%" src={`http://localhost:8080/${dataNew.picture.replace('assets/', '')}`} alt="Item image" />
                  <CardBody>
                    <CardText className="m-0"><span className="font-weight-bold h6">{dataNew.itemName}</span></CardText>
                    <CardText className="m-0"><span className="font-weight-bold h5 text-danger">Rp.{dataNew.price}</span></CardText>
                    <CardText className="m-0"><span className="text-muted h6">{dataNew.category}</span></CardText>
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
