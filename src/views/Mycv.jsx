import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

class Myapi extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">My CV</h5>
                  <hr></hr>
                  
                </CardHeader>
                <CardBody>
                  
                  <div className="mui--text-left">
                    <h6>
                      11/1 Khun Si Sub-District, Sai noi District,
                    </h6> 
                    <h6> Nonthaburi Province 11150</h6> 
                    <br></br>
                    <h6>3 November, 2019  </h6>
                                          
                    
                  </div>

                  <div>
                    <h6>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}I am writing this with regards to Software Developer position advertised on www.th.jobsdb.
                     My name is Tharin Tantayothin, with Bachelor Degree of Computer and Electronic Engineering at Kasetsart University Kamphaeng Saen Campus and currently studying a master's degree in computer engineering at Kasetsart University. 
                    I am very interested in the position. 
                    </h6>
                  </div>
                  <br></br>
                  <div>
                    <h6>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}My degree course has prepared me well for this position. During my project, I was required to do a lot of independent research, which required self-motivation, 
                    and the ability to organize and work on a long-term project, in particular, Computer and Electronics Engineer Project has helped prepare me by improved self-researching for develop responsible module and effectively co-operate with another group. 

                    </h6>
                  </div>
                  <br></br>
                  <div>
                    <h6>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}I’m attracted to this role, because I desire to improve my potential, performance and effectively working with others and I hope that I can demonstrate to you that I would be a good fit for this company, with my proven skills, commitment to the role, and enthusiasm to learn. 
                      
                    </h6>
                  </div>
                  <br></br>
                  <div>

                    <h6>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                    I’m available to be interviewed at your convenience and shall be glad to give you any further details that you may require. If you wish to contact me, my phone number is +66812318897 or by email at nut_514@hotmail.com. Please do get in touch if you have any question. 

                    </h6>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="mui--text-left">
                  <h6>
                    Yours sincerely, Mr. Tharin Tantayothin nut_514@hotmail.com
                  </h6>
                      
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Myapi;