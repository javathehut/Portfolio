import React, { Component } from 'react';
import './App.css';
import angel from './images/angel.jpg';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import insta from './icons/instagram.png';
import linkedin from './icons/linkedin.png';
import twitter from './icons/twitter.png';
import github from './icons/github.png';
import { Link } from 'react-router';

class About extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={7}>
            <img className="aboutPic" src={angel} alt="Angelique Lazarus" />
          </Col>
          <Col xs={12} md={5}>
            <div className="blurb">
              WEB DEVELOPER SEEKING EXCITING CAREER/PROJECT OPPORTUNITIES
          </div>
          </Col>
        </Row>
        <div className="glyphy">
          <Glyphicon glyph="menu-down" />
        </div>
        <div>
          <h2 className="lead aboutLead">
            Angelique is a web developer, educator, and artist. In essence, she is a creator. Her passion and enthusiasm for learning, problem-solving, building, and languages have led her to pursue these 3 rewarding endeavours that allow her to fully explores these areas of interest.
          </h2>
          <hr />
          <p className="aboutMe">
            <span className="aboutHeading">WEB DEVELOPMENT: </span>
            An intrinsically motivated self-starter, Angelique has been coding since September 2015. She began on her own through various online resources (Free Code Camp, Code Academy, Udemy, etc.) and then decided to take it more seriously with BrainStation Toronto's full-time Web Development certificate program. She is itching to get into more opportunities to build good code and make people's lives easier. Angelique loves working in JavaScript and gets a kick out of building single page applications (SPAs) in React.
          </p>
          <p className="aboutMe">
            <span className="aboutHeading">EDUCATION: </span>
            Angelique has 8 years of experience teaching ESL (in Canada and South Korea) and an M.Ed. degree in Adult Education and Community Development. As such, she is adaptable, flexible, and one hell of a communicator.
          </p>
          <p className="aboutMe">
            <span className="aboutHeading">ART: </span>
            That one person in the room singing something or other? That's Angelique.
        Much of her art has been vocal, from choral singing, to solo performances, musical theatre, and <Link to="https://www.voices.com/people/angelique333">voice acting. </Link>
            Check her out in episode 3 of <strong><Link to="http://bigdata.show" target="_blank">'Big Data' by Ryan Estrada.</Link></strong>
          </p>
          <hr />
        </div>
        <div className="footer1">
          <p><Glyphicon glyph="copyright-mark" /> Angelique Lazarus | <em>Site created using React & React-Bootstrap</em> </p>
        </div>
        <div className="footer2">
          <Link to="https://www.github.com/javathehut" target="_blank"><img className="icons" src={github} alt="github" /></Link>
          <Link to="https://www.linkedin.com/in/angeliquelazarus/" target="_blank"><img className="icons" src={linkedin} alt="linkedin" /></Link>

          <Link to="https://www.instagram.com/chocolatycoding" target="_blank"><img className="icons" src={insta} alt="instagram" /></Link>
          <Link to="https://twitter.com/ChocolatyCoding" target="_blank"><img className="icons" src={twitter} alt="twitter" /></Link>
        </div>
      </div>
    );
  }
}

export default About;