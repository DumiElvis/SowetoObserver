import React from 'react';
import { Row, Col } from 'reactstrap';
import {  } from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardBody,CardSubtitle, CardLink } from 'reactstrap';
import AdCorner from '../Home/adComponent'



class news extends React.Component {
  render() {
    return (
      <div className='Container'>
        <Row>
          <Col md="9">   
       

          <CardDeck className='Cards'>
                  <Card>
                     <div className='CardsInfo'>
                        <CardTitle>Title</CardTitle>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                     </div>
                        <CardBody>
                          <i>Date</i>
                           <br/>
                          <i>Author</i>
                            <br/>
                            <br/>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
                        </CardBody>
                    </Card>   
                    <Card>
                      <div className='CardsInfo'>
                          <CardTitle>Title</CardTitle>
                          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                      </div>
                         <CardBody>
                         <i>Date</i>
                           <br/>
                          <i>Author</i>
                            <br/>
                            <br/>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
                        </CardBody>
                    </Card>   
                    <Card>
                      <div className='CardsInfo'>
                          <CardTitle>Title</CardTitle>
                          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                      </div>
                         <CardBody>
                         <i>Date</i>
                           <br/>
                          <i>Author</i>
                            <br/>
                            <br/>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
                        </CardBody>
                    </Card> 
                </CardDeck>
            </Col>
          <Col md="3">
           <div>
             <AdCorner/>
          </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default news;
