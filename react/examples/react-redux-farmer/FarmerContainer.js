import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Button, Form,Col} from 'react-bootstrap';
import {getFarmers,createFarmer,updateFarmer, deleteFarmer} from "./actions";


 class FarmerContainer extends Component{

   onStore = (e) => {

     e.preventDefault();
     e.stopPropagation();

     const data = document.querySelector("form#create-farmer"),
          form = new FormData(data);

      this.props.createFarmer(form);
      data.reset();
   }

   onUpdate = (e) => {

     e.preventDefault();
     e.stopPropagation();

     const data = document.querySelector("form#update-farmer"),
          form = new FormData(data);

    this.props.updateFarmer(form);
    data.reset();

   }

   onDelete = (e) => {

     e.preventDefault();
     e.stopPropagation();

     const data = document.querySelector("form#delete-farmer"),
          form = new FormData(data);

      this.props.deleteFarmer(form);
      data.reset();
   }


  render(){
      const {farmers , getFarmers} = this.props;
    //  const list = farmers.length ?  farmers.map( (data,e) => {  return <li className="h3" key="{data.id}">e.name</li>;  }) : "";
    return(
      <Container className="border py-5">
        <h2 className="text-center">Farmer API</h2>
        <section className="border-top">
          <h3>Read Farmers</h3>
          <Row className="justify-content-center">
            <Button variant="primary" onClick={() => getFarmers()} >retrieve farmers</Button>
          </Row>
          <Row>
            <ul>
              {  farmers.map( farmer => {
                  return <li key={farmer.id}>{farmer.name}</li>
              })}
            </ul>
          </Row>

        </section>
        <section className="border-top">
          <h3>Create Farmers</h3>
          <Row>
            <Col md={8}>
              <Form id="create-farmer" onSubmit={this.onStore}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name="name" type="text" placeholder="Farmer's name" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>City</Form.Label>
                  <Form.Control name="city" type="text" placeholder="City" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>State</Form.Label>
                  <Form.Control name="state" type="text"  placeholder="State" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
            </Col>
          </Row>

        </section>
        <section className="border-top">
          <h3>Update Farmers</h3>
          <Row>
            <Col md={8}>
              <Form id="update-farmer" onSubmit={this.onUpdate}>
                <Form.Group >
                  <Form.Label>Id</Form.Label>
                  <Form.Control name="id" type="number" placeholder="Farmer ID" />
                </Form.Group>
                <Form.Group >
                  <Form.Label>Name</Form.Label>
                  <Form.Control name="name" type="text" placeholder="Farmer's name" />
                </Form.Group>

                <Form.Group >
                  <Form.Label>City</Form.Label>
                  <Form.Control name="city" type="text" placeholder="City" />
                </Form.Group>

                <Form.Group >
                  <Form.Label>State</Form.Label>
                  <Form.Control name="state" type="text"  placeholder="State" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
            </Col>
          </Row>

        </section>
        <section className="border-top">
          <h3>Delete Farmers</h3>
          <Row>
            <Col md={8}>
              <Form id="delete-farmer" onSubmit={this.onDelete}>
                <Form.Group >
                  <Form.Label>Id</Form.Label>
                  <Form.Control name="id" type="number" placeholder="Farmer ID" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
            </Col>
          </Row>

        </section>

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    farmers: state.farmers,
    message:state.message
  }
}

const mapDispatchToProps = {
  getFarmers,
  createFarmer,
  updateFarmer,
  deleteFarmer
};


export default connect(mapStateToProps, mapDispatchToProps )(FarmerContainer);
