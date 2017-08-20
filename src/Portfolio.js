import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Thumbnail, Col } from 'react-bootstrap';
import {portfolioItems} from './portfolioItems.js';



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
            </div>
        );
    }
}

export default Portfolio;