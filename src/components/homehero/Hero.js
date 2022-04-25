import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Hero.css';



const Hero = () => {

  const {searchPostList, isLoading, error} = useSelector((state)=>state.posts);

  if(isLoading) return <h3>Loading ...</h3>;
  if(error) return <h3>{error}</h3>

  return (
    <section className="heroBanner">
      <Container>
        <Row>
            <Col>
              <ul>
                {
                  searchPostList.length ? (
                    searchPostList.slice(0,5).map((row) => (
                      
                        <li key={row.p_id}>
                          
                            <Image src={`./uploads/${row.image}`} alt="Mini blog"  fluid />
                            <div className="heroBannerInner">
                              <div>
                                <b style={{backgroundColor: row.catColor}}>{row.catName}</b>
                                <h2><Link to={`/post/${row.p_id}`}>{row.title}</Link></h2>
                                <span>{new Date(row.addedAt).toLocaleDateString()}</span>
                              </div>
                            </div>
                            
                            
                          
                        </li>
                      
                    ))
                  ) : (
                        <li>
                          <div className="text-center">
                            No ticket show{" "}
                          </div>
                        </li>
                  )
                }
              </ul>
        
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default Hero;