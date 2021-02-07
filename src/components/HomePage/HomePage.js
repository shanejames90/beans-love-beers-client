import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Image from 'react-bootstrap/Image'
import axios from 'axios'

const apiUrl = 'https://api.punkapi.com/v2/beers?page=1&per_page=6'

class HomePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      beer1: {
        image1: '',
        officialName1: '',
        description1: '',
        favorite1: ''
      },
      beer2: {
        image2: '',
        officialName2: '',
        description2: '',
        favorite2: ''
      },
      beer3: {
        image3: '',
        officialName3: '',
        description3: '',
        favorite3: ''
      },
      beer4: {
        image4: '',
        officialName4: '',
        description4: '',
        favorite4: ''
      },
      beer5: {
        image5: '',
        officialName5: '',
        description5: '',
        favorite5: ''
      },
      beer6: {
        image6: '',
        officialName6: '',
        description6: '',
        favorite6: ''
      }
    }
  }

  componentDidMount () {
    axios.get(apiUrl)
      // .then(res => console.log(res))
      .then(res => this.setState({ beer1: { image1: res.data[0].image_url, officialName1: res.data[0].name, description1: res.data[0].description },
        beer2: { image2: res.data[1].image_url, officialName2: res.data[1].name, description2: res.data[1].description },
        beer3: { image3: res.data[2].image_url, officialName3: res.data[2].name, description3: res.data[2].description },
        beer4: { image4: res.data[3].image_url, officialName4: res.data[3].name, description4: res.data[3].description },
        beer5: { image5: res.data[4].image_url, officialName5: res.data[4].name, description5: res.data[4].description },
        beer6: { image6: res.data[5].image_url, officialName6: res.data[5].name, description6: res.data[5].description } }))
      .catch(console.error)
  }

  getString = (str) => {
    return str.slice(0, 100)
  }

  render () {
    const { image1, officialName1, description1 } = this.state.beer1
    const { image2, officialName2, description2 } = this.state.beer2
    const { image3, officialName3, description3 } = this.state.beer3
    const { image4, officialName4, description4 } = this.state.beer4
    const { image5, officialName5, description5 } = this.state.beer5
    const { image6, officialName6, description6 } = this.state.beer6
    const beer1 = (
      <div>
        <Card style={{ height: '14rem', width: '22rem', borderRadius: '7px', boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.1)' }}>
          <Row style={{ marginLeft: '300px', paddingTop: '10px' }}>
            <Col>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#46dcc6" className="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg></p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} lg={6} xl={14}>
              <Image src={image1} thumbnail style={{ height: '150px', width: '70px', border: 'none', paddingTop: '5px', paddingBottom: '50px', paddingLeft: '20px' }}/>
            </Col>
            <Col xs={6} md={4} lg={6} xl={14} style={{ marginTop: '-14px', paddingTop: '-15px', paddingBottom: '80px', paddingRight: '100px', paddingLeft: '-60px' }}>
              <Card.Body style={{ marignRight: '50px', marginLeft: '-82px' }}>
                <Card.Title style={{ marginBottom: '0px' }}>
                  {officialName1}
                </Card.Title>
                <Card.Text style={{ width: '12rem', position: '' }}>
                  {description1}...
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    )
    const beer2 = (
      <div>
        <Card style={{ height: '14rem', width: '22rem', borderRadius: '7px', boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.1)' }}>
          <Row style={{ marginLeft: '300px', marginTop: '10px' }}>
            <Col>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#46dcc6" className="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg></p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} lg={6} xl={14}>
              <Image src={image2} thumbnail style={{ height: '150px', width: '70px', border: 'none', paddingTop: '5px', paddingBottom: '50px', paddingLeft: '20px' }}/>
            </Col>
            <Col xs={6} md={4} lg={6} xl={14} style={{ marginTop: '-14px', paddingTop: '-15px', paddingBottom: '80px', paddingRight: '100px', paddingLeft: '-60px' }}>
              <Card.Body style={{ marignRight: '50px', marginLeft: '-82px' }}>
                <Card.Title style={{ width: '12rem', marginBottom: '0px' }}>
                  {officialName2}
                </Card.Title>
                <Card.Text style={{ width: '11rem', height: '', paddingBottom: '10px' }}>
                  {this.getString(description2)}...
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    )
    const beer3 = (
      <div>
        <Card style={{ height: '14rem', width: '22rem', borderRadius: '7px', boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.1)' }}>
          <Row style={{ marginLeft: '300px', marginTop: '10px' }}>
            <Col>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#46dcc6" className="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg></p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} lg={6} xl={14}>
              <Image src={image3} thumbnail style={{ height: '150px', width: '70px', border: 'none', paddingTop: '5px', paddingBottom: '50px', paddingLeft: '20px' }}/>
            </Col>
            <Col xs={6} md={4} lg={6} xl={14} style={{ marginTop: '-14px', paddingTop: '-15px', paddingBottom: '80px', paddingRight: '100px', paddingLeft: '-60px' }}>
              <Card.Body style={{ marignRight: '50px', marginLeft: '-82px' }}>
                <Card.Title style={{ width: '12rem', marginBottom: '0px' }}>
                  {officialName3}
                </Card.Title>
                <Card.Text style={{ width: '10rem', position: '' }}>
                  {description3}...
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    )
    const beer4 = (
      <div>
        <Card style={{ height: '14rem', width: '22rem', borderRadius: '7px', boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.1)' }}>
          <Row style={{ marginLeft: '300px', marginTop: '10px' }}>
            <Col>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#46dcc6" className="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg></p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} lg={6} xl={14}>
              <Image src={image4} thumbnail style={{ height: '150px', width: '70px', border: 'none', paddingTop: '5px', paddingBottom: '50px', paddingLeft: '20px' }}/>
            </Col>
            <Col xs={6} md={4} lg={6} xl={14} style={{ marginTop: '-14px', paddingTop: '-15px', paddingBottom: '80px', paddingRight: '100px', paddingLeft: '-60px' }}>
              <Card.Body style={{ marignRight: '50px', marginLeft: '-82px' }}>
                <Card.Title style={{ width: '12rem', marginBottom: '0px' }}>
                  {officialName4}
                </Card.Title>
                <Card.Text style={{ width: '12rem', position: '' }}>
                  {this.getString(description4)}...
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    )
    const beer5 = (
      <div>
        <Card style={{ height: '14rem', width: '22rem', borderRadius: '7px', boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.1)' }}>
          <Row style={{ marginLeft: '300px', marginTop: '10px' }}>
            <Col>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#46dcc6" className="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg></p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} lg={6} xl={14}>
              <Image src={image5} thumbnail style={{ height: '150px', width: '70px', border: 'none', paddingTop: '5px', paddingBottom: '50px', paddingLeft: '20px' }}/>
            </Col>
            <Col xs={6} md={4} lg={6} xl={14} style={{ marginTop: '-14px', paddingTop: '-15px', paddingBottom: '80px', paddingRight: '10px', paddingLeft: '-60px' }}>
              <Card.Body style={{ marignRight: '50px', marginLeft: '-82px' }}>
                <Card.Title style={{ width: '12rem', marginBottom: '0px' }}>
                  {officialName5}
                </Card.Title>
                <Card.Text style={{ width: '12rem', position: '' }}>
                  {this.getString(description5)}...
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    )
    const beer6 = (
      <div>
        <Card style={{ height: '14rem', width: '22rem', borderRadius: '7px', boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.1)' }}>
          <Row style={{ marginLeft: '300px', marginTop: '10px' }}>
            <Col>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#46dcc6" className="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg></p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} lg={6} xl={14}>
              <Image src={image6} thumbnail style={{ height: '150px', width: '70px', border: 'none', paddingTop: '5px', paddingBottom: '50px', paddingLeft: '20px' }}/>
            </Col>
            <Col xs={6} md={4} lg={6} xl={14} style={{ marginTop: '-14px', paddingTop: '-15px', paddingBottom: '80px', paddingRight: '100px', paddingLeft: '-60px' }}>
              <Card.Body style={{ marignRight: '50px', marginLeft: '-82px' }}>
                <Card.Title style={{ width: '12rem', marginBottom: '0px' }}>
                  {officialName6}
                </Card.Title>
                <Card.Text style={{ width: '11rem', position: '' }}>
                  {this.getString(description6)}...
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    )
    return (
      <div>
        <Container style={{ marginTop: '20px' }}>
          <Row style= {{}}>
            <CardDeck>
              {beer1}{beer2}{beer3}
            </CardDeck>
          </Row>
          <Row style={{ marginTop: '0px', marginBottom: '20px' }}>
            <span></span>
          </Row>
          <Row>
            <CardDeck>
              {beer4}{beer5}{beer6}
            </CardDeck>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withRouter(HomePage)
