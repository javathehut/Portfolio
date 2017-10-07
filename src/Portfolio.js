import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Thumbnail, Col, Glyphicon } from 'react-bootstrap';
import {portfolioItems} from './portfolioItems.js';
import insta from './icons/instagram.png';
import linkedin from './icons/linkedin.png';
import twitter from './icons/twitter.png';
import github from './icons/github.png';
import { Link } from 'react-router';


class Portfolio extends Component {
    render() {
        let myPortfolio = portfolioItems.map((item, i) => {
            return (
                <Col xs={12} md={4} key={i}>
                <Thumbnail  className="pfLink pfpic" href={portfolioItems[i].link} target="_blank" src={portfolioItems[i].image} alt={portfolioItems[i].alt}>
                    <h3 className="page-header">{portfolioItems[i].title}</h3>
                    <p className="lead">{portfolioItems[i].description}</p>
                    <p><strong>CREATED USING: </strong>{portfolioItems[i].tools}</p>
                    <p><strong>CODED: </strong>{portfolioItems[i].team}</p>
                </Thumbnail>
            </Col>
            )
        })

        return (
            <div>
                <h1 className='page-header portHead'>PORTFOLIO</h1>

                <Grid>
                    <Row>
                        {myPortfolio}
                    </Row>
                </Grid>
                <hr />
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

export default Portfolio;