import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
  } from "reactstrap"
// reactstrap components
class Myapi extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:8080/scgService/FindrestaurantsByPlace")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.results
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div className="content" >Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div className="content">Loading...</div>;
      } else {
        return (
        <div className="content">
          <ul>
            {items.map(item => (
              
                <Row>
                    <Col md="12">
                    <Card>
                        <CardHeader>
                        <CardTitle tag="h5">{item.name}</CardTitle>
                        <p className="card-category">Rating {item.rating}</p>
                        </CardHeader>
                        <CardBody>
                            <div>
                                <p>ที่อยู่ : {item.formatted_address}</p> 
                            </div>
                        </CardBody>
                        <CardFooter>
                       
                        </CardFooter>
                    </Card>
                    </Col>
                </Row>
                
            ))}
          </ul>
          </div>
        );
      }
    }
  }

export default Myapi;