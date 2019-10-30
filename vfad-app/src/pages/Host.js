import React, { Fragment } from "react";
import Hero from "../components/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Host() {
  return (
    <Fragment>
      <div>
        <Hero backgroundImage="http://luxseattle.com/wp-content/uploads/2013/11/Modern-Waterfront-Home-on-Mercer-Island.jpg">
          <h1>Have space you want to rent out?</h1>
          <h2>Be a Host!</h2>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>
                Welcome HOST! Register your property and manage guests here!
              </h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
                Do you have a rental property for short-term listing in the
                Seattle area? Are you interested in the finding the best
                location to crash and stay locally? Say goodbye to the everyday
                grind with an exciting vacation to this vibrant city. Find the
                perfect vacation home, space, room or outdoor venue to rent and
                discover the limitless activities and attractions that these
                destinations have to offer.
              </p>
              <h2>Popular Locations</h2>
              <p>
                In Seattle you simply can’t skip the Central Public Library – a
                modern architectural marvel of glass grids, unusual shapes, and
                a “book spiral” that climbs four stories. Stroll over to Pike
                Place Market to visit the original Starbucks and play catch with
                a fishmonger. In the heart of the city lies Chihuly Garden and
                Glass, which will dazzle you with its colorful and delicate
                works. Glide to the top of the Space Needle for panoramic views
                of the surrounding mountain ranges and Puget Sound.
              </p>
              <h2>Why be a Host?</h2>
              <p>
                Enjoy easy passive income from renting out an extra room that is
                barely used. Why stop at just rooms or outdoor spaces? Go ahead
                and rent out your couch, extra mattress, driveway and back yard
                with a tent to enjoy even more earnings! By using the full space
                of your property, you can quickly accumulate maximum revenue by
                efficiently using all available space! Beautiful waterfront
                properties are waiting for you or non-affluent areas with used
                couches and mattresses!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <h2>Sign Up:</h2>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="First Name" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="Last Name" placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
}

export default Host;
