import React from 'react'
import { Carousel } from 'react-bootstrap'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div>
        <NavBar/>
        
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/cinematograph-concept-background-design-with-popcorn-3d-glasses_260559-142.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/movie-clapper-red-background-with-copy-space_23-2148416747.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://as2.ftcdn.net/v2/jpg/01/54/76/07/1000_F_154760711_C3jq59wTGrNVmIyB8DI54qkdlP6QBxZD.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


        </div>
  
  )
}

export default Home