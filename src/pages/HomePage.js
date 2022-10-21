import MyCard from '../components/MyCard'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function HomePage() {
  return (
    <div className='mt-4'>
      <Container>
        <Row>
            <Col xl={3}>
               <MyCard />
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
