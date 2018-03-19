import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Thumbnail, Col, Glyphicon } from 'react-bootstrap';
import { portfolioItems } from './portfolioItems.js';
import insta from './icons/instagram.png';
import linkedin from './icons/linkedin.png';
import twitter from './icons/twitter.png';
import github from './icons/github.png';
import { Link } from 'react-router';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
} from 'reactstrap';


class Portfolio extends Component {
    render() {
        let myPortfolio = portfolioItems.map((item, i) => {
            return (
                <Col xs={12} md={4} key={i}>
                    <CardLink href={portfolioItems[i].link} target="_blank">
                        <Card className="pfLink">
                            <CardImg className="pfpic" top width="100%" src={portfolioItems[i].image} alt={portfolioItems[i].alt} />
                            <CardBody>
                                <CardTitle className="page-header"><strong>{portfolioItems[i].title}</strong></CardTitle>
                                <CardSubtitle>{portfolioItems[i].description}</CardSubtitle>
                                <CardText><p>CREATED USING: {portfolioItems[i].tools}</p>
                                    <p>CODED: {portfolioItems[i].team}</p></CardText>
                            </CardBody>
                        </Card>
                    </CardLink>
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
                    <p><Glyphicon glyph="copyright-mark" /> Angelique Lazarus | <em>Site created using React & ReactStrap</em> </p>
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