import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import axios from 'axios'

import apiUrl from './../../apiConfig'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      beerName: '',
      id: '',
      image: '',
      officialName: '',
      description: '',
      favorite: false
    }
  }

  handleInputChange = (event) => {
    event.persist()
    this.setState({ beerName: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.get(`${apiUrl}${this.state.beerName}`)
      // .then(res => console.log(res))
      .then(res => this.setState({ id: res.data[0].id, image: res.data[0].image_url, officialName: res.data[0].name, description: res.data[0].description }))
      .catch(console.error)
  }

  render () {
    const { beerName, image, officialName, description, favorite } = this.state
    let beerDisplay
    if (!image && !officialName && !description && !favorite) {
      beerDisplay = ''
    } else {
      beerDisplay = (
        <div>
          <Container style={{ marginLeft: '30%', marginRight: '30%', marginTop: '15px' }}>
            <Card style={{ width: '22rem', height: '14rem', align: 'center', borderRadius: '5px', boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.1)' }}>
              <Row style={{ marginLeft: '305px', marginTop: '10px' }}>
                <Col>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg></p>
                </Col>
              </Row>
              <Row style={{ width: '15rem', marginTop: '-49px' }}>
                <Col xs={6} md={4} lg={6} xl={14}>
                  <Image src={image} thumbnail style={{ height: '193px', width: '70px', border: 'none', paddingTop: '60px', paddingBottom: '40px', paddingLeft: '20px' }}/>
                </Col>
                <Col xs={6} md={4} lg={6} xl={14} style={{ paddingTop: '43px' }}>
                  <Card.Body style={{ marignRight: '50px' }}>
                    <Card.Text style={{ width: '12rem' }}>
                      <h6 style={{ fontWeight: 'bold', marginBottom: '0px' }}>{officialName}</h6>
                      <p>{description}..</p>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Container>
        </div>
      )
    }

    return (
      <div>
        <Form onSubmit={this.handleSubmit} style={{ width: '53vw', marginTop: '4%', marginLeft: '23%', marginRight: '23%' }}>
          <InputGroup>
            <FormControl
              name="search"
              value={beerName}
              placeholder="Search for beer..."
              onChange={this.handleInputChange}
            />
            <InputGroup.Append>
              <Button type="submit" variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        {beerDisplay}
      </div>
    )
  }
}

export default withRouter(SearchBar)
